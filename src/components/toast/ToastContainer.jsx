import { useDispatch, useSelector } from 'react-redux';
import { Toast, ToastContainer } from 'react-bootstrap';
import { hideToast } from '../../redux/toast-slice/toastSlice';

export default function ToastComponent() {
  const dispatch = useDispatch();
  const { show, message, variant } = useSelector((state) => state.toast);

  return (
    <ToastContainer position='top-end' className='p-3'>
      <Toast
        onClose={() => dispatch(hideToast())}
        show={show}
        delay={3000}
        autohide
        bg={variant}
        animation={true}
      >
        <Toast.Header>
          <strong className='me-auto'>Notification</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
