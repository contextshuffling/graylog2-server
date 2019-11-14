// eslint-disable-next-line no-restricted-imports
import { ListGroupItem as BootstrapListGroupItem } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { color } from 'theme';
import { contrastingColor, colorLevel, readableColor } from 'theme/utils';

import bsStyleThemeVariant from './variants/bsStyle';

const listGroupItemStyles = (hex, variant) => {
  const backgroundColor = colorLevel(color.variant[variant], -9);
  const textColor = readableColor(backgroundColor);

  return css`
    &&.list-group-item-${variant} {
      color: ${textColor};
      background-color: ${backgroundColor};

      a&,
      button& {
        color: ${textColor};

        .list-group-item-heading {
          color: inherit;
        }

        &:hover,
        &:focus {
          color: ${textColor};
          background-color: ${color.variant.light[variant]};
        }
        &.active,
        &.active:hover,
        &.active:focus {
          color: ${readableColor(color.variant.light[variant])};
          background-color: ${color.variant.light[variant]};
          border-color: ${color.variant.light[variant]};
        }
      }
    }
  `;
};

const ListGroupItem = styled(BootstrapListGroupItem)`

${bsStyleThemeVariant(listGroupItemStyles, {}, ['success', 'info', 'warning', 'danger'])};

  background-color: ${color.gray[90]};
  border-color: ${color.gray[80]};

  &&.disabled,
  &&.disabled:hover,
  &&.disabled:focus {
    color: ${color.gray[60]};
    background-color: ${color.gray[90]};

    .list-group-item-text {
      color: ${color.gray[60]};
    }
  }

  &.active,
  &.active:hover,
  &.active:focus {
    color: ${color.gray[100]};
    background-color: ${color.variant.primary};
    border-color: ${color.variant.light.primary};

    .list-group-item-text {
      color: ${color.variant.light.primary};
    }
  }

  a&,
  button& {
    color: ${color.gray[30]};

    .list-group-item-heading {
      color: ${color.gray[20]};
    }

    &:hover,
    &:focus {
      color: ${color.gray[30]};
      background-color: ${color.gray[70]};
    }
  }
`;


export default ListGroupItem;
