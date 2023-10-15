
const DisplayOption = ({...props}) => {
    const { options, showOption, fieldName, onChange, car } = props
    const handleOptionClick = (index, price, image) => {
        const option = options[index]
        console.log(option)
        if (option && typeof option.convertible !== "undefined") {
            console.log("car", car.convertible)
            console.log("option", option.convertible)
            if (!car.convertible && option.convertible) {
                alert("This option is only available for convertible cars.");
                return;
            } else if (car.convertible && !option.convertible) {
                alert("This option is not available for convertible cars.");
                return;
            }
        }
        
        onChange(option.name, fieldName, price, image);
    };
    
    return (
        <div className={`option-list ${showOption ? 'show' : ''}`}>
            {options.map((option, index) => (
                <div 
                    key={index} 
                    className="option-value"
                    onClick={() => handleOptionClick(index, option.price, option.image)}
                >
                        <img 
                            src={option.image} 
                            className="car-detail-image"
                        /> 
                        <div className="option-card-overlay">
                            <div className="option-card-details"> 
                                <p className="car-description"> 
                                    {option.name}
                                    <br />
                                    &#128181; {option.price}
                                    <br />
                                    { option.convertible && "convertible only" }
                                </p>
                                
                            </div>
                        </div>
                    </div>
            ))}
    </div>
    )
}
export default DisplayOption;