// eslint-disable-next-line no-restricted-imports
import { Panel as BootstrapPanel } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { colorLevel, readableColor } from 'theme/utils';
import bsStyleThemeVariant from './variants/bsStyle';

const panelVariantStyles = color => (hex, variant) => {
  const backgroundColor = colorLevel(color.variant.light[variant], -9);
  const borderColor = colorLevel(color.variant.dark[variant], -10);

  return css`
    border-color: ${borderColor};

    & > .panel-heading {
      color: ${readableColor(backgroundColor)};
      background-color: ${backgroundColor};
      border-color: ${borderColor};

      + .panel-collapse > .panel-body {
        border-top-color: ${borderColor};
      }

      .badge {
        color: ${backgroundColor};
        background-color: ${hex};
      }
    }

    & > .panel-footer {
      + .panel-collapse > .panel-body {
        border-bottom-color: ${borderColor};
      }
    }
  `;
};

const StyledPanel = styled(BootstrapPanel)(({ theme }) => {
  const backgroundColor = theme.color.gray[90];
  const borderColor = theme.color.gray[80];

  return css`
    background-color: ${theme.color.global.contentBackground};
    border-color: ${borderColor};

    & > .panel-heading {
      color: ${readableColor(backgroundColor)};
      background-color: ${backgroundColor};
      border-color: ${borderColor};

      + .panel-collapse > .panel-body {
        border-top-color: ${borderColor};
      }

      .badge {
        color: ${backgroundColor};
        background-color: ${readableColor(backgroundColor)};
      }
    }

    & > .panel-footer {
      + .panel-collapse > .panel-body {
        border-bottom-color: ${borderColor};
      }
    }

    .panel-footer {
      background-color: ${theme.color.gray[80]};
      border-top-color: ${theme.color.gray[90]};
    }

    .panel-group {
      .panel-heading {
        font-weight: 700;

        + .panel-collapse > .panel-body,
        + .panel-collapse > .list-group {
          border-top-color: ${theme.color.gray[90]};
        }
      }

      .panel-footer {
        + .panel-collapse .panel-body {
          border-bottom-color: ${theme.color.gray[90]};
        }
      }
    }

    ${bsStyleThemeVariant(panelVariantStyles(theme.color))}
  `;
});

export default StyledPanel;
