import React, { forwardRef } from 'react';

// eslint-disable-next-line no-restricted-imports
import { SplitButton as BootstrapSplitButton } from 'react-bootstrap';
import styled from 'styled-components';

import buttonStyles from './styles/button';
import menuItemStyles from './styles/menuItem';
import { propTypes, defaultProps } from './props/button';

const StyledSplitButton = styled(BootstrapSplitButton)(({ theme }) => `
  ${buttonStyles(theme.color)};

  ~ .btn.dropdown-toggle {
    ${buttonStyles(theme.color)};

    ${menuItemStyles(theme.color, { sibling: true })};
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
