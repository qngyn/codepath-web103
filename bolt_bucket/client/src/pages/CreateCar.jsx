import '../App.css'
import './CreateCar.css'
import CarsAPI from '../services/CarsAPI'
import { useState } from 'react'
import {
    ExteriorOptions, 
    RoofOptions,
    WheelsOptions,
    InteriorOptions
} from '../options/options'

const CreateCar = () => {
    const [car, setCar] = useState({
        name: '',
        exterior: '',
        wheels: '',
        roof: '',
        interior: '',
        price: 65000
    })
    const [showExterior, setShowExterior] = useState(false);
    const [showRoof, setShowRoof] = useState(false);
    const [showWheels, setShowWheels] = useState(false);
    const [showInterior, setShowInterior] = useState(false);


    const handleChange = (event) => {
        const { name, value } = event.target
        setGift( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCar = (event) => {
        event.preventDefault()
        CarsAPI.createCar(car)
    }

    const toggleExteriorOptions = () => {
        setShowExterior(true);
        setShowRoof(false);
        setShowWheels(false);
        setShowInterior(false);
      };
    
      const toggleRoofOptions = () => {
        setShowExterior(false);
        setShowRoof(true);
        setShowWheels(false);
        setShowInterior(false);
      };
    
      const toggleWheelsOptions = () => {
        setShowExterior(false);
        setShowRoof(false);
        setShowWheels(true);
        setShowInterior(false);
      };
    
      const toggleInteriorOptions = () => {
        setShowExterior(false);
        setShowRoof(false);
        setShowWheels(false);
        setShowInterior(true);
      };


    return (
        <div className="body-container">
            <div className="create-car">
                <label> 
                    <input type="checkbox" id="convertible" /> Convertible
                </label>
                <div className="create-car-options">
                    <div className="car-option">
                        <button onClick={toggleExteriorOptions}>Exterior</button>
                    </div>
                    <div className="car-option">
                        <button onClick={toggleRoofOptions}>Roof</button>
                    </div>
                    <div className="car-option">
                        <button onClick={toggleWheelsOptions}>Wheels</button>
                    </div>
                    <div className="car-option">
                        <button onClick={toggleInteriorOptions}>Interior</button>
                    </div>
                </div>
            </div>
            <div> 
                {showExterior && (
                    <div className={`option-list ${showExterior ? 'show' : ''}`}>
                            {ExteriorOptions.map((option, index) => (
                                <div 
                                    key={index} 
                                    className="option-value"
                                >
                                    <img src={option.image} alt={option.name} />
                                </div>
                            ))}
                    </div>
                )}
                {showRoof && (
                    <div className={`option-list ${showRoof ? 'show' : ''}`}>
                            {RoofOptions.map((option, index) => (
                                <div key={index} className="option-value">
                                    <img src={option.image} alt={option.name} />
                                </div>
                            ))}
                    </div>
                )}
                {showWheels && (
                    <div className={`option-list ${showWheels ? 'show' : ''}`}>
                            {WheelsOptions.map((option, index) => (
                                <div key={index} className="option-value">
                                    <img src={option.image} alt={option.name} />
                                </div>
                            ))}
                    </div>
                )}
                {showInterior && (
                    <div className={`option-list ${showInterior ? 'show' : ''}`}>
                            {InteriorOptions.map((option, index) => (
                                <div key={index} className="option-value">
                                    <img src={option.image} alt={option.name} />
                                </div>
                            ))}
                    </div>
                )}
            </div>
            <div className="car-price">
                {car.price}
            </div>
        </div>
    )
}

export default CreateCar