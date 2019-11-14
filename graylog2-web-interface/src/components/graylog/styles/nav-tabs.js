import { css } from 'styled-components';
import { breakpoint, color } from 'theme';

const navTabsStyles = () => css`
  .nav-tabs {
    border-bottom-color: ${color.tertiary.quattro};

    > li {
      > a {
        &:hover {
          border-color: ${color.secondary.due} ${color.secondary.due} ${color.tertiary.quattro};
          background-color: ${color.secondary.due};
        }
      }

      &.active > a {
        &,
        &:hover,
        &:focus {
          color: ${color.primary.tre};
          background-color: ${color.primary.due};
          border-color: ${color.tertiary.quattro};
          border-bottom-color: transparent;
        }
      }
    }

    &.nav-justified {
      > .active > a,
      > .active > a:hover,
      > .active > a:focus {
        border-color: ${color.tertiary.quattro};
      }

      @media (min-width: ${breakpoint.min.sm}) {
        > li > a {
          border-bottom-color: ${color.tertiary.quattro};
        }
        > .active > a,
        > .active > a:hover,
        > .active > a:focus {
          border-bottom-color: ${color.primary.due};
        }
      }
    }
  }
`;

export default navTabsStyles;
