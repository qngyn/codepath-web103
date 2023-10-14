import '../App.css'
import './CarDetails.css'
import { useState, useEffect } from 'react'
import CarsAPI from '../services/CarsAPI'
const CarDetails = () => {
    const [car, setCar] = useState([])
    const carId = window.location.pathname.split('/')[2]
    useEffect(() => {
        const carData = async () => {
            try {
                const response = await CarsAPI.getCarById(carId)
                setCar(response)
            } catch (err) {
                throw err 
            }
        }
        carData()
    }, [])

    const deleteCar = (event) => {
        event.preventDefault()
        CarsAPI.deleteCar(carId)
    }

    return (
        <div className="car-container">
            <div className="car-headliner"> 
                <h2> {car.name} </h2>
            </div>
            <div className="car-body">
                <div className="car-body-info">
                    <h4> &#x1F4B0; ${car.price} </h4>
                    <div className="car-button"> 
                        <a href={'/edit/' + carId} role='button'>EDIT</a>
                        <button onClick={deleteCar}>DELETE</button>
                    </div>
                </div>
                <div className="car-body-info">
                    <div className="car-detail"> 
                        <img src={car.exteriorimage} className="car-detail-image"/> 
                        <div className="car-detail-layer">
                            <p clasName="car-description"> &#x1F58C;&#xFE0F; {car.exterior}</p>
                            <p clasName="car-description">  &#128181; {car.exteriorprice}</p>
                        </div>
                    </div>
                    <div className="car-detail"> 
                        <img src={car.wheelsimage} className="car-detail-image"/> 
                        <div className="car-detail-layer">
                            <p clasName="car-description"> &#x1F6DE; {car.wheels}</p>
                            <p clasName="car-description">  &#128181; {car.wheelsprice}</p>
                        </div>
                    </div>
                </div>
                <div className="car-body-info">
                    <div className="car-detail"> 
                        <img src={car.roofimage} className="car-detail-image"/> 
                        <div className="car-detail-layer">
                            <p clasName="car-description"> &#x1F60E; {car.roof} </p>
                            <p clasName="car-description">  &#128181; {car.roofprice}</p>
                        </div>
                    </div>
                    <div className="car-detail"> 
                        <img src={car.interiorimage} className="car-detail-image"/>
                        <div className="car-detail-layer">
                            <p clasName="car-description"> &#128186; {car.interior} </p>
                            <p clasName="car-description">  &#128181; {car.interiorprice}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails