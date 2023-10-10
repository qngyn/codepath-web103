
const DisplayOption = ({...props}) => {
    const { options, showOption, fieldName, onChange } = props
    const handleOptionClick = (optionName, price, image) => {
        onChange(optionName, fieldName, price, image);
    };
    return (
        <div className={`option-list ${showOption ? 'show' : ''}`}>
            {options.map((option, index) => (
                <div 
                    key={index} 
                    className="option-value"
                    onClick={() => handleOptionClick(option.name, option.price, option.image)}
                >
                        <img 
                            src={option.image} 
                            className="car-detail-image"
                        /> 
                        <div className="option-card-overlay">
                            <div className="option-card-details"> 
                                <p clasName="car-description"> {option.name}</p>
                                <p clasName="car-description">  &#128181; {option.price}</p>
                            </div>
                        </div>
                    </div>
            ))}
    </div>
    )
}
export default DisplayOption;