// eslint-disable-next-line no-restricted-imports
import { InputGroup as BootstrapInputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const InputGroup = styled(BootstrapInputGroup)(({ theme }) => `
  .input-group-addon {
    color: ${theme.color.gray[30]};
    background-color: ${theme.color.gray[100]};
    border-color: ${theme.color.gray[80]};
  }
`);

export default InputGroup;
