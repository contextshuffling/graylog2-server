import React, { forwardRef } from 'react';
// eslint-disable-next-line no-restricted-imports
import { DropdownButton as BootstrapDropdownButton } from 'react-bootstrap';
import styled from 'styled-components';

import menuItemStyles from './styles/menuItem';
import buttonStyles from './styles/button';
import { propTypes, defaultProps } from './props/button';

const StyledDropdownButton = styled(BootstrapDropdownButton)(props => `
  ${buttonStyles(props.theme)};
  ${menuItemStyles({ sibling: true })};
`);

const DropdownButton = forwardRef((props, ref) => {
  return (
    <StyledDropdownButton ref={ref} {...props} />
  );
});

DropdownButton.propTypes = propTypes;

DropdownButton.defaultProps = defaultProps;


export default DropdownButton;
