import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import { Button, Tooltip } from 'components/graylog';
import { OverlayElement, Pluralize, Icon } from 'components/common';
import CollapsibleStreamRuleList from 'components/streamrules/CollapsibleStreamRuleList';
import StreamRuleForm from 'components/streamrules/StreamRuleForm';

import PermissionsMixin from 'util/PermissionsMixin';
import UserNotification from 'util/UserNotification';
import StoreProvider from 'injection/StoreProvider';
import Routes from 'routing/Routes';

import StreamThroughput from './StreamThroughput';
import StreamControls from './StreamControls';
import StreamStateBadge from './StreamStateBadge';

import style from './Stream.css';

const StreamsStore = StoreProvider.getStore('Streams');
const StreamRulesStore = StoreProvider.getStore('StreamRules');

class Stream extends React.Component {
  static propTypes = {
    stream: PropTypes.object.isRequired,
    permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    streamRuleTypes: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    indexSets: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  _formatNumberOfStreamRules = (stream) => {
    if (stream.is_default) {
      return 'The default stream contains all messages.';
    }
    if (!stream.rules || stream.rules.length === 0) {
      return 'No configured rules.';
    }

    let verbalMatchingType;
    switch (stream.matching_type) {
      case 'OR': verbalMatchingType = 'at least one'; break;
      default:
      case 'AND': verbalMatchingType = 'all'; break;
    }

    return (
      <span>
        Must match {verbalMatchingType} of the {stream.rules.length} configured stream{' '}
        <Pluralize value={stream.rules.length} plural="rules" singular="rule" />.
      </span>
    );
  };

  _onDelete = (stream) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove this stream?')) {
      StreamsStore.remove(stream.id, (response) => {
        UserNotification.success(`Stream '${stream.title}' was deleted successfully.`, 'Success');
        return response;
      });
    }
  }

  _onResume = () => {
    this.setState({ loading: true });
    const { stream } = this.props;
    StreamsStore.resume(stream.id, response => response)
      .finally(() => this.setState({ loading: false }));
  }

  _onUpdate = (streamId, stream) => {
    StreamsStore.update(streamId, stream, (response) => {
      UserNotification.success(`Stream '${stream.title}' was updated successfully.`, 'Success');
      return response;
    });
  }

  _onClone = (streamId, stream) => {
    StreamsStore.cloneStream(streamId, stream, (response) => {
      UserNotification.success(`Stream was successfully cloned as '${stream.title}'.`, 'Success');
      return response;
    });
  }

  _onPause = () => {
    const { stream } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(`Do you really want to pause stream '${stream.title}'?`)) {
      this.setState({ loading: true });
      StreamsStore.pause(stream.id, response => response)
        .finally(() => this.setState({ loading: false }));
    }
  }

  _onQuickAdd = () => {
    this.quickAddStreamRuleForm.open();
  }

  _onSaveStreamRule = (streamRuleId, streamRule) => {
    const { stream } = this.props;
    StreamRulesStore.create(stream.id, streamRule, () => UserNotification.success('Stream rule was created successfully.', 'Success'));
  }

  render() {
    const { streamRuleTypes, user, permissions, indexSets, stream } = this.props;
    const { loading } = this.state;

    const isDefaultStream = stream.is_default;
    const defaultStreamTooltip = isDefaultStream
      ? <Tooltip id="default-stream-tooltip">Action not available for the default stream</Tooltip> : null;

    let editRulesLink;
    let manageOutputsLink;
    let manageAlertsLink;
    if (PermissionsMixin.isPermitted(permissions, [`streams:edit:${stream.id}`])) {
      editRulesLink = (
        <OverlayElement overlay={defaultStreamTooltip} placement="top" useOverlay={isDefaultStream}>
          <LinkContainer disabled={isDefaultStream} to={Routes.stream_edit(stream.id)}>
            <Button bsStyle="info">Manage Rules</Button>
          </LinkContainer>
        </OverlayElement>
      );

      manageAlertsLink = (
        <LinkContainer to={Routes.stream_alerts(stream.id)}>
          <Button bsStyle="info">Manage Alerts</Button>
        </LinkContainer>
      );

      if (PermissionsMixin.isPermitted(permissions, ['stream_outputs:read'])) {
        manageOutputsLink = (
          <LinkContainer to={Routes.stream_outputs(stream.id)}>
            <Button bsStyle="info">Manage Outputs</Button>
          </LinkContainer>
        );
      }
    }

    let toggleStreamLink;
    if (PermissionsMixin.isAnyPermitted(permissions, [`streams:changestate:${stream.id}`, `streams:edit:${stream.id}`])) {
      if (stream.disabled) {
        toggleStreamLink = (
          <OverlayElement overlay={defaultStreamTooltip} placement="top" useOverlay={isDefaultStream}>
            <Button bsStyle="success"
                    className="toggle-stream-button"
                    onClick={this._onResume}
                    disabled={isDefaultStream || loading}>
              {loading ? 'Starting...' : 'Start Stream'}
            </Button>
          </OverlayElement>
        );
      } else {
        toggleStreamLink = (
          <OverlayElement overlay={defaultStreamTooltip} placement="top" useOverlay={isDefaultStream}>
            <Button bsStyle="primary"
                    className="toggle-stream-button"
                    onClick={this._onPause}
                    disabled={isDefaultStream || loading}>
              {loading ? 'Pausing...' : 'Pause Stream'}
            </Button>
          </OverlayElement>
        );
      }
    }

    const createdFromContentPack = (stream.content_pack
      ? <Icon name="cube" title="Created from content pack" /> : null);

    const streamRuleList = isDefaultStream ? null
      : (
        <CollapsibleStreamRuleList key={`streamRules-${stream.id}`}
                                   stream={stream}
                                   streamRuleTypes={streamRuleTypes}
                                   permissions={permissions} />
      );
    const streamControls = (
      <OverlayElement overlay={defaultStreamTooltip} placement="top" useOverlay={isDefaultStream}>
        <StreamControls stream={stream}
                        permissions={permissions}
                        user={user}
                        onDelete={this._onDelete}
                        onUpdate={this._onUpdate}
                        onClone={this._onClone}
                        onQuickAdd={this._onQuickAdd}
                        indexSets={indexSets}
                        isDefaultStream={isDefaultStream} />
      </OverlayElement>
    );

    const indexSet = indexSets.find(is => is.id === stream.index_set_id) || indexSets.find(is => is.is_default);
    const indexSetDetails = PermissionsMixin.isPermitted(permissions, ['indexsets:read']) && indexSet ? <span>index set <em>{indexSet.title}</em> &nbsp;</span> : null;

    return (
      <li className="stream">
        <div className="stream-actions pull-right">
          {editRulesLink}{' '}
          {manageOutputsLink}{' '}
          {manageAlertsLink}{' '}
          {toggleStreamLink}{' '}

          {streamControls}
        </div>

        <h2 className={style.streamTitle}>
          <Link to={Routes.stream_search(stream.id)}>{stream.title}</Link>
          {' '}
          <small>{indexSetDetails}<StreamStateBadge stream={stream} /></small>
        </h2>

        <div className="stream-data">
          <div className="stream-description">
            {createdFromContentPack}

            {stream.description}
          </div>
          <div className="stream-metadata">
            <StreamThroughput streamId={stream.id} />. {this._formatNumberOfStreamRules(stream)}
            {streamRuleList}
          </div>
        </div>
        <StreamRuleForm ref={(quickAddStreamRuleForm) => { this.quickAddStreamRuleForm = quickAddStreamRuleForm; }}
                        title="New Stream Rule"
                        onSubmit={this._onSaveStreamRule}
                        streamRuleTypes={streamRuleTypes} />
      </li>
    );
  }
}

export default Stream;
