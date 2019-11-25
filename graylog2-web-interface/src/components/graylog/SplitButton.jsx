import React, { forwardRef } from 'react';

// eslint-disable-next-line no-restricted-imports
import { SplitButton as BootstrapSplitButton } from 'react-bootstrap';
import styled from 'styled-components';

import buttonStyles from './styles/button';
import menuItemStyles from './styles/menuItem';
import { propTypes, defaultProps } from './props/button';

const StyledSplitButton = styled(BootstrapSplitButton)(props => `
  ${buttonStyles(props.theme)};

  ~ .btn.dropdown-toggle {
    ${buttonStyles(props.theme)};

    ${menuItemStyles({ sibling: true })};
  }
`);

const SplitButton = forwardRef((props, ref) => {
  return (
    <StyledSplitButton ref={ref} {...props} />
  );
});

SplitButton.propTypes = propTypes;

SplitButton.defaultProps = defaultProps;

export default SplitButton;
