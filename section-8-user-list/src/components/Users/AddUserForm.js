import {useState} from 'react';
import Card from '../UI/Card';
import styles from './AddUserForm.module.css';
import Button from '../UI/Button';

const AddUserForm = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge]           = useState('');

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            props.onError('Please enter a valid name and age (non-empty values).');
            return;
        }

        if (+enteredAge < 1) {
            props.onError('Please enter a valid age (> 0).');
            return;
        }

        const user = {
            name: enteredUsername,
            age:  enteredAge,
            id:   Math.random().toString(),
        }
        props.onAddUser(user);
        
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username"
                       value={enteredUsername}
                       onChange={usernameChangeHandler}
                       type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                    type="number"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUserForm;