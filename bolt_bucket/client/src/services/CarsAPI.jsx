const CarsAPI = {
    getAllCars : async () => {
        try {
            const response = await fetch('http://localhost:3000/cars')
            const result = await response.json()
            return result
        } catch (err) {
            console.error('Error fetching cars:', err);
        }
    }, 
    getCarById : async (carId) => {
        try {
            const response = await fetch(`http://localhost:3000/cars/${carId}`)
            const result = await response.json()
            return result
        } catch (err) {
            console.error('Error fetching cars:', err);
        }
    },
    createCar: async(carInfo) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carInfo)
            }
            const response = await fetch('http://localhost:3000/cars', options)
            if (response.ok) {
                window.location = '/customcars';
            } else {
                console.error('Error deleting car:', response.statusText);
            }
        } catch (err) {
            console.error('Error creating car:', err);
        }
    }
    ,
    updateCar : async(carId, updateCarInfo) => {
        try {
            const response = await fetch(`http://localhost:3000/cars/${carId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateCarInfo)
            })
            if (response.ok) {
                window.location = '/';
            } else {
                console.error('Error updating car:', response.statusText);
            }
        } catch (err) {
            console.error('Error updating car:', err);
        }
    }, 
    deleteCar: async (carId) => {
        try {
            const options = {
                method: 'DELETE'
            }
            const response = await fetch(`http://localhost:3000/cars/${carId}`, options)
            if (response.ok) {
                window.location = '/customcars';
            } else {
                console.error('Error deleting car:', response.statusText);
            }
        } catch (err) {
            console.error('Error deleting car:', err);
        }
        
    }
}

export default CarsAPI;