import { css } from 'styled-components';
import { breakpoint, color } from 'theme';

const navTabsStyles = () => css`
  .nav-tabs {
    border-bottom-color: ${color.variant.primary};

    > li {
      > a {
        &:hover {
          border-color: ${color.gray[90]} ${color.gray[90]} ${color.variant.primary};
          background-color: ${color.gray[90]};
        }
      }

      &.active > a {
        &,
        &:hover,
        &:focus {
          color: ${color.global.textDefault};
          background-color: ${color.gray[100]};
          border-color: ${color.variant.primary};
          border-bottom-color: transparent;
        }
      }
    }

    &.nav-justified {
      > .active > a,
      > .active > a:hover,
      > .active > a:focus {
        border-color: ${color.variant.primary};
      }

      @media (min-width: ${breakpoint.min.sm}) {
        > li > a {
          border-bottom-color: ${color.variant.primary};
        }

        > .active > a,
        > .active > a:hover,
        > .active > a:focus {
          border-bottom-color: ${color.gray[100]};
        }
      }
    }
  }
`;

export default navTabsStyles;
