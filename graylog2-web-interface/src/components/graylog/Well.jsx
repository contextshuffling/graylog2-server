// eslint-disable-next-line no-restricted-imports
import { Well as BootstrapWell } from 'react-bootstrap';
import styled from 'styled-components';

const Well = styled(BootstrapWell)(({ theme }) => `
  background-color: ${theme.color.gray[90]};
  border-color: ${theme.color.gray[80]};
`);

export default Well;
