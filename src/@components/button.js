const CustomButton = (props) => {
    const { label, className } = props;
    return (<button className={className}>{label}</button>);
};

export default CustomButton;