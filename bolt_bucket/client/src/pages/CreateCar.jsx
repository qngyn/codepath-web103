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
        exteriorimage: '',
        wheels: '',
        wheelsprice: 0,
        wheelsimage:'',
        roof: '',
        roofprice: 0,
        roofimage: '',
        interior: '',
        interiorprice: 0,
        interiorimage: '',
        convertible: false
    })

    const [showExterior, setShowExterior] = useState(false);
    const [showRoof, setShowRoof] = useState(false);
    const [showWheels, setShowWheels] = useState(false);
    const [showInterior, setShowInterior] = useState(false);


    const handleChange = (optionName, fieldName, price, image) => {
        setCar((prevCar) => {
            let prevOptionPrice = 0
            if (fieldName !== 'convertible') {
                prevOptionPrice = prevCar[fieldName] === '' ? 0 : prevCar[`${fieldName}price`];
            } 
            return {
                ...prevCar,
                [fieldName]: optionName,
                [`${fieldName}price`]: price,
                [`${fieldName}image`]: image,
                price: prevCar.price - prevOptionPrice + price
            }
        })
    };

    useEffect(() => { 
        console.log(car)
    }, [car])

    const createCar = (event) => {
        event.preventDefault()
        const updatedCar = { ...car };
        const defaultCar = {
            name: 'Default Car',
            price: 65000,
            exterior: 'Silver Flare Metallic',
            exteriorprice: 500,
            exteriorimage: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gsj.png',
            wheels: 'Ultra Bright Trident Spoke',
            wheelsprice: 500,
            wheelsimage:"https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q8s.png",
            roof: 'Body Color',
            roofprice: 500,
            roofimage: "https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/cm9.png",
            interior: 'Adrenaline Red',
            interiorprice: 1000,
            interiorimage: "https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/o_aric.png",
            convertible: false
        }

        if (updatedCar.exterior === '') {
            updatedCar.exterior = defaultCar.exterior;
            updatedCar.exteriorprice = defaultCar.exteriorprice;
            updatedCar.exteriorimage = defaultCar.exteriorimage;
            updatedCar.price += updatedCar.exteriorprice
        }

        if (updatedCar.wheels === '') {
            updatedCar.wheels = defaultCar.wheels;
            updatedCar.wheelsprice = defaultCar.wheelsprice;
            updatedCar.wheelsimage = defaultCar.wheelsimage;
            updatedCar.price += updatedCar.wheelsprice
        }
        if (updatedCar.roof === '') {
            updatedCar.roof = defaultCar.roof;
            updatedCar.roofprice = defaultCar.roofprice;
            updatedCar.roofimage = defaultCar.roofimage;
            updatedCar.price += updatedCar.roofprice
        }

        if (updatedCar.interior === '') {
            updatedCar.interior = defaultCar.interior;
            updatedCar.interiorprice = defaultCar.interiorprice;
            updatedCar.interiorimage = defaultCar.interiorimage;
            updatedCar.price += updatedCar.interiorprice
        }

        CarsAPI.createCar(updatedCar)
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
                    <input 
                        type="checkbox" 
                        id="convertible" 
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            handleChange(isChecked, 'convertible', isChecked ? 10000 : -10000, ''); 
                        }}
                    /> 
                    Convertible
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
                    <div className="car-option">
                        <input 
                            type="text" 
                            placeholder='My New Car'
                            value={car.name}
                            onChange={(e) => handleChange(e.target.value, 'name', 0, '')}
                        />
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
                        car={car}
                    />
                )}
                {showRoof && (
                    <DisplayOption 
                        options = {RoofOptions}
                        showOption = {showRoof}
                        fieldName="roof"
                        onChange={handleChange}
                        car={car}
                    />
                )}

                {showWheels && (
                    <DisplayOption 
                        options = {WheelsOptions}
                        showOption = {showWheels}
                        fieldName="wheels"
                        onChange={handleChange}
                        car={car}
                    />
                )}
                {showInterior && (
                    <DisplayOption 
                        options = {InteriorOptions}
                        showOption = {showInterior}
                        fieldName="interior"
                        onChange={handleChange}
                        car={car}
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