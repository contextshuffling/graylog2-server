// eslint-disable-next-line no-restricted-imports
import { Badge as BootstrapBadge } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { readableColor } from 'theme/utils';
import bsStyleThemeVariant from './variants/bsStyle';

const badgeStyles = () => {
  const cssBuilder = (hex) => {
    const backgroundColor = hex;
    const textColor = readableColor(backgroundColor);

    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
    `;
  };

  return bsStyleThemeVariant(cssBuilder);
};

const Badge = styled(BootstrapBadge)`
  ${badgeStyles()}
`;

export default Badge;
