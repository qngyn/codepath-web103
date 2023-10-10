import '../App.css'
import './CreateCar.css'
import CarsAPI from '../services/CarsAPI'
import { useEffect, useState } from 'react'
import {
    ExteriorOptions, 
    RoofOptions,
    WheelsOptions,
    InteriorOptions
} from '../options/options'

import DisplayOption from '../components/DisplayOption'

const CreateCar = () => {
    const [car, setCar] = useState({
        name: '',
        price: 65000,
        exterior: '',
        exteriorprice: 0,
        wheels: '',
        wheelsprice: 0,
        roof: '',
        roofprice: 0,
        interior: '',
        interiorprice: 0,
    })

    const [showExterior, setShowExterior] = useState(false);
    const [showRoof, setShowRoof] = useState(false);
    const [showWheels, setShowWheels] = useState(false);
    const [showInterior, setShowInterior] = useState(false);


    const handleChange = (optionName, fieldName, price) => {
        setCar((prevCar) => {
            const prevOptionPrice = prevCar[fieldName] === '' ? 0 : prevCar[`${fieldName}price`];
            return {
                ...prevCar,
                [fieldName]: optionName,
                [`${fieldName}price`]: price,
                price: prevCar.price - prevOptionPrice + price
            }
        })
    };

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

                <div className="car-button">
                    <button onClick={createCar}>CREATE</button>
                </div>
            </div>
            <div className="option-container"> 
                {showExterior && (
                    <DisplayOption 
                        options = {ExteriorOptions}
                        showOption = {showExterior}
                        fieldName="exterior"
                        onChange={handleChange}
                    />
                )}
                {showRoof && (
                    <DisplayOption 
                        options = {RoofOptions}
                        showOption = {showRoof}
                        fieldName="roof"
                        onChange={handleChange}
                    />
                )}

                {showWheels && (
                    <DisplayOption 
                        options = {WheelsOptions}
                        showOption = {showWheels}
                        fieldName="wheels"
                        onChange={handleChange}
                    />
                )}
                {showInterior && (
                    <DisplayOption 
                        options = {InteriorOptions}
                        showOption = {showInterior}
                        fieldName="interior"
                        onChange={handleChange}
                    />
                )}
            </div>
            <div className="car-price">
                &#x1F4B0; ${car.price}
            </div>
        </div>
    )
}

export default CreateCar