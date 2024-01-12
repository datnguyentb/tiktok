import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onclick }) {
    let Comp = 'button';
    const classes = 'wrapper';
    return (
        <Comp className={cx(classes)}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
