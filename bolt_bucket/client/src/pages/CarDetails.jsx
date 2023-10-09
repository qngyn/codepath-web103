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

    console.log(car)
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
                    <h4> {car.exterior} </h4>
                    <h4> {car.wheels} </h4>
                </div>
                <div className="car-body-info">
                    <h4> {car.roof} </h4>
                    <h4> {car.interior} </h4>
                </div>
            </div>
        </div>
    )
}

export default CarDetails