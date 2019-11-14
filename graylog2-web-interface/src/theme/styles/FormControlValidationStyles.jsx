import { createGlobalStyle } from 'styled-components';
import { darken, lighten } from 'polished';

import InputGroup from 'components/graylog/InputGroup';
import { colorLevel } from 'theme/utils';
import colors from '../colors';

const VARIANTS = [
  {
    success: {
      text: colorLevel(colors.tertiary.tre, 6),
      border: colors.tertiary.tre,
      background: colorLevel(colors.tertiary.tre, -6),
    },
  },
  {
    warning: {
      text: colorLevel(colors.tertiary.sei, 6),
      border: colors.tertiary.sei,
      background: colorLevel(colors.tertiary.sei, -6),
    },
  },
  {
    error: {
      text: colorLevel(colors.secondary.uno, 6),
      border: colors.secondary.uno,
      background: colorLevel(colors.secondary.uno, -6),
    },
  },
];

const generateStyles = () => {
  let styles = '';

  VARIANTS.forEach((variant) => {
    const key = Object.keys(variant)[0];

    styles += `
      .has-${key} {
        .help-block,
        .control-label,
        .radio,
        .checkbox,
        .radio-inline,
        .checkbox-inline,
        &.radio label,
        &.checkbox label,
        &.radio-inline label,
        &.checkbox-inline label  {
          color: ${variant[key].text};
        }

        .form-control {
          border-color: ${variant[key].border};

          &:focus {
            border-color: ${darken(0.10, variant[key].border)};
            box-shadow(inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px ${lighten(0.20, variant[key].border)});
          }
        }

        ${InputGroup} .input-group-addon {
          color: ${variant[key].text};
          background-color: ${variant[key].background};
          border-color: ${variant[key].border};
        }

        .form-control-feedback {
          color: ${variant[key].text};
        }
      }
    `;
  });

  return styles;
};

const FormControlValidationStyles = createGlobalStyle`
  ${generateStyles()}
`;

export default FormControlValidationStyles;
