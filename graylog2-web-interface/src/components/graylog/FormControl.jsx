// eslint-disable-next-line no-restricted-imports
import { FormControl as BootstrapFormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { color } from 'theme';

const FormControl = styled(BootstrapFormControl)`
  color: ${color.global.textDefault};
  background-color: ${color.gray[100]};
  border-color: ${color.gray[80]};

  &:focus {
    border-color: ${color.variant.light.info};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px ${transparentize(0.6, color.variant.light.info)};
  }

  &::-moz-placeholder { color: ${color.gray[60]}; }
  &:-ms-input-placeholder { color: ${color.gray[60]}; }
  &::-webkit-input-placeholder  { color: ${color.gray[60]}; }

  &[disabled],
  &[readonly],
  fieldset[disabled] & {
    background-color: ${color.gray[80]};
  }

  ~ .form-control-feedback.glyphicon { display: none; }
`;

export default FormControl;
