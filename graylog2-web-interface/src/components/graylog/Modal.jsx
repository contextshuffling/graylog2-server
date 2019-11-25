// eslint-disable-next-line no-restricted-imports
import { Modal as BootstrapModal } from 'react-bootstrap';
import styled from 'styled-components';
import { transparentize } from 'polished';

const Modal = styled(BootstrapModal)(props => `
  .modal-content {
    background-color: ${props.theme.color.global.contentBackground};
    border-color: ${transparentize(0.8, props.theme.color.gray[0])};

    .modal-header {
      border-bottom-color: ${props.theme.color.gray[90]};
    }

    .modal-footer {
      border-top-color: ${props.theme.color.gray[90]};
    }
  }
`);

export default Modal;
