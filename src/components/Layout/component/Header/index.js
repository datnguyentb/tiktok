import { useEffect, useState } from 'react';
import logo from '~/assets/images/logo/tiktok_logo.png';
import { IoSearchOutline, IoCloseCircle } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" width="118"></img>
                </div>

                <div className={cx('search')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
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
                    </Tippy>
                </div>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
