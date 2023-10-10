import '../App.css'
import './ViewCars.css'
import { useState, useEffect } from 'react'
import CarsAPI from '../services/CarsAPI'
const ViewCars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        const carsData = async () => {
            try {
                const response = await CarsAPI.getAllCars()
                setCars(response)
            } catch (err) {
                throw err 
            }
        }
        carsData()
    }, [])

    return (
        <div>
            {
                cars.map((car) => {
                    return (
                        <div key={car.id} className='car-card'>
                            <h2> {car.name ? car.name : " "}</h2>
                            <div className="car-info">
                                <div className="card-info-block"> 
                                    <p className="card-description"> <span className="card-description-name">&#x1F58C;&#xFE0F; Exterior</span>: {car.exterior}</p>
                                    <p className="card-description"> <span className="card-description-name">&#x1F6DE; Wheels</span>: {car.wheels}</p>
                                </div>
                                <div className="card-info-block"> 
                                    <p className="card-description"> <span className="card-description-name">&#128186; Interior</span>: {car.interior}</p>
                                    <p className="card-description"> <span className="card-description-name"> &#x1F60E; Roof</span>: {car.roof}</p>
                                </div>
                                <div className="card-info-block"> 
                                    <p className="card-price"> &#x1F4B0; ${car.price}</p>
                                    <a href={'/customcars/' + car.id} role='button'>Details</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewCars