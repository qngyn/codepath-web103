import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../api/LocationsAPI'
import EventsAPI from '../api/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const locationName = window.location.pathname.split('/').pop();
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    console.log(locationName)
    useEffect(() => {
        async function fetchData() {
            try {
                const locations = await LocationsAPI.getAllLocations();

                const selectedLocation = locations.find(
                    (location) => 
                        {
                            return location.name.toLowerCase().replace(' ','') === locationName 
                        });


                const eventsData = await EventsAPI.getAllEvents();
                const locationEvents = eventsData.filter(
                    (event) => 
                        {
                            return event.location.toLowerCase().replace(' ','') === locationName
                        });

                setLocation(selectedLocation);
                setEvents(locationEvents);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [locationName]);

    
    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents