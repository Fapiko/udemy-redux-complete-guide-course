import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './ErrorNotification.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div onClick={props.onClickHandler} className={styles.backdrop}/>;
}

const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>Invalid input</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClickHandler}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorNotification = props => {
    if (props.message === '') {
        return null;
    }

    const onClickHandler = () => {
        props.onError('');
    }

    return (
        <>
            {/*<div onClick={onClickHandler} className={styles.backdrop}></div>*/}
            {ReactDOM.createPortal(
                <Backdrop onClickHandler={onClickHandler}/>, document.getElementById('backdrop-root'),
            )}
            {ReactDOM.createPortal(<ModalOverlay message={props.message}
                                                 onClickHandler={onClickHandler}/>, document.getElementById(
                'modal-root'))}
        </>
    );
}

export default ErrorNotification;