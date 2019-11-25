// eslint-disable-next-line no-restricted-imports
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import styled from 'styled-components';
import { darken } from 'polished';

import { readableColor } from 'theme/utils';

const Pagination = styled(BootstrapPagination)(({ theme }) => `
  > li {
    > a,
    > span {
      color: ${readableColor(theme.color.gray[100])};
      background-color: ${theme.color.gray[100]};
      border-color: ${theme.color.gray[80]};

      &:hover,
      &:focus {
        color: ${darken(0.15, theme.color.variant.primary)};
        background-color: ${theme.color.gray[90]};
        border-color: ${theme.color.gray[80]};
      }
    }
  }

  > .active > a,
  > .active > span {
    &,
    &:hover,
    &:focus {
      color: ${readableColor(theme.color.variant.primary)};
      background-color: ${theme.color.variant.primary};
      border-color: ${theme.color.variant.primary};
    }
  }

  > .disabled {
    > span,
    > span:hover,
    > span:focus,
    > a,
    > a:hover,
    > a:focus {
      color: ${theme.color.gray[60]};
      background-color: ${theme.color.gray[100]};
      border-color: ${theme.color.gray[80]};
    }
  }
`);

export default Pagination;
