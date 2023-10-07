import { useState, useEffect } from "react";
import Event from "../components/Event";
import '../css/Event.css'
import '../css/LocationEvents.css'
import EventsAPI from "../api/EventsAPI";

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const eventsData = async () => {
            try {
                const response = await EventsAPI.getAllEvents()
                setEvents(response)
            } catch (error) {
                throw error
            }
        }
        eventsData()
    }, [])

    return (
        <div className='location-events'>
            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events;