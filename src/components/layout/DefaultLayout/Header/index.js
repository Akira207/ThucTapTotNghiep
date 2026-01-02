import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Todo App</h1>
        </div>
     );
}

export default Header;