import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';
import { css, createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';

import { color } from 'theme';
import { variantColors } from './variants/bsStyle';

const defaultStripColor = transparentize(0.75, color.primary.due);

const variants = (styles) => {
  let style = '';

  styles.forEach((variant) => {
    style += `.progress-bar-${variant} {
      background-color: ${variantColors[variant]};
    }`;
  });

  return css`${style}`;
};

const StyledProgressBar = createGlobalStyle`
  .progress {
    background-color: ${color.secondary.due};

    .progress-bar {
      color: ${color.primary.due};
      background-color: ${color.tertiary.uno};
    }

    .progress-striped .progress-bar,
    .progress-bar-striped {
      background-image: linear-gradient(45deg,
                        ${defaultStripColor} 25%,
                        transparent 25%,
                        transparent 50%,
                        ${defaultStripColor} 50%,
                        ${defaultStripColor} 75%,
                        transparent 75%,
                        transparent);
    }

    ${variants(['success', 'info', 'warning', 'danger'])};
  }
`;

const ProgressBar = (props) => {
  return (
    <>
      <StyledProgressBar />
      <BootstrapProgressBar {...props} />
    </>
  );
};

export default ProgressBar;
