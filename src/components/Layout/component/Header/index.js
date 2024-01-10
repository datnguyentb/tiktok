import logo from '~/assets/images/logo/tiktok_logo.png';
import { IoSearchOutline, IoCloseCircle } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" width="118"></img>
                </div>

                <div className={cx('search')}>
                    <form className={cx('search-box')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <IoCloseCircle />
                        </button>
                        <FaSpinner className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <div className={cx('icon-search')}>
                                <IoSearchOutline />
                            </div>
                        </button>
                    </form>
                </div>

                <div className={cx('header-right-container')}></div>
            </div>
        </header>
    );
}

export default Header;
