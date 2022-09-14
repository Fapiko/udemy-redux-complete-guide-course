import classes from './Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../store/auth';

const Header = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    let headerContent = <nav>
        <ul>
            <li>
                <a href="/">My Products</a>
            </li>
            <li>
                <a href="/">My Sales</a>
            </li>
            <li>
                <button onClick={logoutHandler}>Logout</button>
            </li>
        </ul>
    </nav>;

    if (!isAuth) {
        headerContent = <></>
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {headerContent}
        </header>
    );
};

export default Header;
