import React from 'react';
import AddUserForm from './components/Users/AddUserForm';
import UsersList from './components/Users/UsersList';
import ErrorNotification from './components/Users/ErrorNotification';

const INITIAL_USERS = [
    {
        id:   'u1',
        name: 'Max',
        age:  31,
    },
    {
        id:   'u2',
        name: 'Lucas',
        age:  33,
    },
]

function App() {
    const [users, setUsers]               = React.useState(INITIAL_USERS);
    const [errorMessage, setErrorMessage] = React.useState('');

    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        });
    }

    const setErrorHandler = (message) => {
        setErrorMessage(message);
    }

    return (
        // <Wrapper>
        // <> is a React.Fragment
        <React.Fragment>
            <AddUserForm onError={setErrorHandler} onAddUser={addUserHandler}/>
            <ErrorNotification onError={setErrorHandler} message={errorMessage}/>
            <UsersList users={users}/>
        </React.Fragment>
        // </>
        // </Wrapper>
    );
}

export default App;
