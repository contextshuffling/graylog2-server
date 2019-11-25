// eslint-disable-next-line no-restricted-imports
import { Jumbotron as BootstrapJumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Jumbotron = styled(BootstrapJumbotron)(props => `
  color: ${props.theme.color.global.textDefault};
  background-color: ${props.theme.color.gray[100]};
`);

export default Jumbotron;
