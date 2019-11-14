// eslint-disable-next-line no-restricted-imports
import { FormControl as BootstrapFormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

import { color } from 'theme';

const FormControl = styled(BootstrapFormControl)`
  color: ${color.primary.tre};
  background-color: ${color.primary.due};
  border-color: ${color.secondary.tre};

  &:focus {
    border-color: ${color.tertiary.due};
    box-shadow(inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px ${transparentize(0.6, color.tertiary.due)});
  }

  &::-moz-placeholder { color: ${lighten(0.6, color.primary.tre)}; }
  &:-ms-input-placeholder { color: ${lighten(0.6, color.primary.tre)}; }
  &::-webkit-input-placeholder  { color: ${lighten(0.6, color.primary.tre)}; }

  &[disabled],
  &[readonly],
  fieldset[disabled] & {
    background-color: ${color.secondary.tre};
  }

  ~ .form-control-feedback.glyphicon { display: none; }
`;

export default FormControl;
