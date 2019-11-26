import { createGlobalStyle } from 'styled-components';
import { darken, lighten } from 'polished';

import { colorLevel } from 'theme/utils';
import InputGroup from 'components/graylog/InputGroup';

const generateStyles = (color) => {
  let styles = '';
  const variants = [
    {
      success: {
        text: colorLevel(color.variant.success, 6),
        border: color.variant.success,
        background: colorLevel(color.variant.success, -6),
      },
    },
    {
      warning: {
        text: colorLevel(color.variant.warning, 6),
        border: color.variant.warning,
        background: colorLevel(color.variant.warning, -6),
      },
    },
    {
      error: {
        text: colorLevel(color.variant.danger, 6),
        border: color.variant.danger,
        background: colorLevel(color.variant.danger, -6),
      },
    },
  ];

  variants.forEach((variant) => {
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

const FormControlValidationStyles = createGlobalStyle(({ theme }) => `
  ${generateStyles(theme.color)}
`);

export default FormControlValidationStyles;
