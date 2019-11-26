import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';
import { css, createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';

import { variantColors } from './variants/bsStyle';

const variants = (styles) => {
  let style = '';

  styles.forEach((variant) => {
    style += `.progress-bar-${variant} {
      background-color: ${variantColors[variant]};
    }`;
  });

  return css`${style}`;
};

const StyledProgressBar = createGlobalStyle(({ theme }) => {
  const defaultStripColor = transparentize(0.87, theme.color.gray[100]);

  return css`
    .progress {
      background-color: ${theme.color.gray[90]};

      .progress-bar {
        color: ${theme.color.global.textAlt};
        background-color: ${theme.color.variant.primary};
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
});

const ProgressBar = (props) => {
  return (
    <>
      <StyledProgressBar />
      <BootstrapProgressBar {...props} />
    </>
  );
};

export default ProgressBar;
