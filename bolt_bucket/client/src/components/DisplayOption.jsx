const DisplayOption = ({...props}) => {
    const { options, showOption, fieldName, onChange } = props
    const handleOptionClick = (optionName, price) => {
        onChange(optionName, fieldName, price);
    };

    return (
        <div className={`option-list ${showOption ? 'show' : ''}`}>
            {options.map((option, index) => (
                <div 
                    key={index} 
                    className="option-value"
                    onClick={() => handleOptionClick(option.name, option.price)}
                >
                    <img src={option.image} alt={option.name} />
                </div>
            ))}
    </div>
    )
}
export default DisplayOption;