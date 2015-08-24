const React = require('react');
const Immutable = require('immutable');

const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Input = require('react-bootstrap').Input;
const Panel = require('react-bootstrap').Panel;
const Button = require('react-bootstrap').Button;

const Spinner = require('../common/Spinner');

const RolesStore = require('../../stores/users/RolesStore').RolesStore;
const LdapGroupsStore = require('../../stores/users/LdapGroupsStore').LdapGroupsStore;

const LdapGroupsComponent = React.createClass({
  getInitialState() {
    return {
      loaded: 0,
      groups: Immutable.Set.of(),
      roles: Immutable.Set.of(),
      mapping: Immutable.Map(),
    };
  },

  componentDidMount() {
    LdapGroupsStore.loadMapping().done(mapping => this.setState({mapping: Immutable.Map(mapping), loaded: this.state.loaded + 1}));
    LdapGroupsStore.loadGroups().done(groups => this.setState({groups: Immutable.Set(groups), loaded: this.state.loaded + 1}));
    RolesStore.loadRoles().done(roles => this.setState({roles: Immutable.Set(roles), loaded: this.state.loaded + 1}));
  },

  render() {
    const options = this.state.roles.sort().map(role => {
      return (<option key={role.name} value={role.name}>{role.name}</option>);
    });
    const content = this.state.groups.sortBy(group => group.toLocaleUpperCase()).map(group => {
      return (<li key={group}>
        <Input label={group} data-group={group} type="select" value={this.state.mapping.get(group, '')} onChange={this._updateMapping} labelClassName="col-sm-3" wrapperClassName="col-sm-4">
          <option value="">None</option>
          {options}
        </Input>
      </li>);
    });
    if (this.state.loading < 3) {
      return <Spinner />;
    }
    if (content.size === 0) {
      return (<Row>
        <Col md={12} push={1}>
          <Panel bsStyle="info">No LDAP/Active Directory groups found. Please check your LDAP settings.</Panel>
        </Col>
      </Row>);
    } else {
      return (
        <form className='form-horizontal'>
          <Row>
            <Col md={12}>
              <ul>{content}</ul>
            </Col>
            <Col md={10} push={2}>
              <Button onClick={this._saveMapping} bsStyle="success">Save</Button>&nbsp;
              <Button href={jsRoutes.controllers.UsersController.index().url}>Cancel</Button>
            </Col>
          </Row>
        </form>
      );
    }
  },

  _updateMapping(e) {
    const role = e.target.value;
    const group = e.target.getAttribute('data-group');
    if (role === "") {
      this.setState({mapping: this.state.mapping.delete(group)});
    } else {
      this.setState({mapping: this.state.mapping.set(group, role)});
    }
  },
  _saveMapping() {
    LdapGroupsStore.saveMapping(this.state.mapping.toJS());
  },
});

module.exports = LdapGroupsComponent;
