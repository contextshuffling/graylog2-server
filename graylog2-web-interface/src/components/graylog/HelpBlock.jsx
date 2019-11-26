// eslint-disable-next-line no-restricted-imports
import { HelpBlock as BootstrapHelpBlock } from 'react-bootstrap';
import styled from 'styled-components';

const HelpBlock = styled(BootstrapHelpBlock)(({ theme }) => `
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${theme.color.gray[50]};
`);

export default HelpBlock;
