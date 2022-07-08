import classNames from 'classnames';

import './components.scss';

const CustomButton = (props) => {
    const { label, className = '', primary } = props;
    return (<button className={classNames('custom-button', { 'primary': primary }, className)}>{label}</button>);
};

export default CustomButton;