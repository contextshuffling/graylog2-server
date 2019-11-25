// eslint-disable-next-line no-restricted-imports
import { Nav as BootstrapNav } from 'react-bootstrap';
import styled from 'styled-components';

import navTabsStyles from './styles/nav-tabs';

const Nav = styled(BootstrapNav)(({ theme }) => `
  &.nav {
    > li {
      > a {
        &:hover,
        &:focus {
          background-color: ${theme.color.gray[90]};
        }
      }

      &.disabled > a {
        color: ${theme.color.global.textDefault};

        &:hover,
        &:focus {
          color: ${theme.color.global.textDefault};
        }
      }
    }

    .open > a {
      &,
      &:hover,
      &:focus {
        background-color: ${theme.color.gray[90]};
        border-color: ${theme.color.variant.primary};
      }
    }
  }

  &.nav-pills {
    > li {
      &.active > a {
        &,
        &:hover,
        &:focus {
          color: ${theme.color.gray[100]};
          background-color: ${theme.color.variant.primary};
        }
      }
    }
  }

  &${navTabsStyles(theme.color)}
`);

export default Nav;
