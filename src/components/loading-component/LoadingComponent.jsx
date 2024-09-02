import styles from './css/loadingComponent.module.css';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingComponent() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.spinnerContainer}>
        <Spinner animation='grow' variant='primary'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
