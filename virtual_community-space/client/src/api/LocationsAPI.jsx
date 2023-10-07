const LocationsAPI = {
    getAllLocations:  async () => {
        try {
            const response = await fetch('http://localhost:3000/locations')
            const result = await response.json()
            return result
        } catch (err) {
            console.error('Error fetching locations:', err);
        }
    }
}

export default LocationsAPI;