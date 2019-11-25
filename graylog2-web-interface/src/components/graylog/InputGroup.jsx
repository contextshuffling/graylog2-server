// eslint-disable-next-line no-restricted-imports
import { InputGroup as BootstrapInputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const InputGroup = styled(BootstrapInputGroup)(props => `
  .input-group-addon {
    color: ${props.theme.color.gray[30]};
    background-color: ${props.theme.color.gray[100]};
    border-color: ${props.theme.color.gray[80]};
  }
`);

export default InputGroup;
