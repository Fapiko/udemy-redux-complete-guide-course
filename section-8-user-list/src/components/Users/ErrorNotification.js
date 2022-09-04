import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './ErrorNotification.module.css';

const ErrorNotification = props => {
    if (props.message === '') {
        return null;
    }

    const onClickHandler = () => {
        props.onError('');
    }

    return (
        <div onClick={onClickHandler} className={styles.backdrop}>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>Invalid input</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onClickHandler}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorNotification;