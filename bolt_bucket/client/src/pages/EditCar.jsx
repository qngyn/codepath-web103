import '../App.css'
import { useState, useEffect } from 'react'
// import './EditCar.css'
import CarsAPI from '../services/CarsAPI'
import { useParams } from 'react-router-dom'
import DisplayOption from '../components/DisplayOption'
import {
    ExteriorOptions, 
    RoofOptions,
    WheelsOptions,
    InteriorOptions
} from '../options/options'

const EditCar = () => {
    const { id } = useParams()

    const [car, setCar] = useState([])
    useEffect(() => {
        const carData = async () => {
            try {
                const response = await CarsAPI.getCarById(id)
                setCar(response)
            } catch (err) {
                throw err 
            }
        }
        carData()
    }, [id])

    const updateCar = async (event) => {
        event.preventDefault()
        try {
            const updateCar = await CarsAPI.updateCar(id, car)
            window.location = `/customcars/${id}`
        } catch (err) {
            console.log("Car not updated:", err )
        }
    }

    const [showExterior, setShowExterior] = useState(false);
    const [showRoof, setShowRoof] = useState(false);
    const [showWheels, setShowWheels] = useState(false);
    const [showInterior, setShowInterior] = useState(false);

    const handleChange = (optionName, fieldName, price, image) => {
        setCar((prevCar) => {
            const prevOptionPrice = prevCar[fieldName] === '' ? 0 : prevCar[`${fieldName}price`];
            return {
                ...prevCar,
                [fieldName]: optionName,
                [`${fieldName}price`]: price,
                [`${fieldName}image`]: image,
                price: prevCar.price - prevOptionPrice + price
            }
        })
    };

    const deleteCar = (event) => {
        event.preventDefault()
        CarsAPI.deleteCar(id)
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
        <div className="car-container">
            <div className="car-headliner"> 
                <h2> {car.name} </h2>
            </div>
            <div className="body-container">
                <div className="create-car">
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
                            <button onClick={updateCar}>DONE</button>
                        </div>
                        <div className="car-price">
                            &#x1F4B0; ${car.price}
                        </div>
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
            </div>
            <div className="car-body">
                <div className="car-body-info">
                    <h4> &#x1F4B0; ${car.price} </h4>
                    <div className="car-button"> 
                        <input type="submit" value="UPDATE" />
                        <button onClick={deleteCar}>DELETE</button>
                    </div>
                </div>
                <div className="car-body-info">
                    <div className="car-detail"> 
                        <img src={car.exteriorimage} className="car-detail-image"/> 
                        <div className="car-detail-layer">
                            <p className="car-description"> &#x1F58C;&#xFE0F; {car.exterior}</p>
                            <p className="car-description">  &#128181; {car.exteriorprice}</p>
                        </div>
                    </div>
                    <div className="car-detail"> 
                        <img src={car.wheelsimage} className="car-detail-image"/> 
                        <div className="car-detail-layer">
                            <p className="car-description"> &#x1F6DE; {car.wheels}</p>
                            <p className="car-description">  &#128181; {car.wheelsprice}</p>
                        </div>
                    </div>
                </div>
                <div className="car-body-info">
                    <div className="car-detail"> 
                        <img src={car.roofimage} className="car-detail-image"/> 
                        <div className="car-detail-layer">
                            <p className="car-description"> &#x1F60E; {car.roof} </p>
                            <p className="car-description">  &#128181; {car.roofprice}</p>
                        </div>
                    </div>
                    <div className="car-detail"> 
                        <img src={car.interiorimage} className="car-detail-image"/>
                        <div className="car-detail-layer">
                            <p className="car-description"> &#128186; {car.interior} </p>
                            <p className="car-description">  &#128181; {car.interiorprice}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCar