import { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "./BookingForm";

function EventList(){
    const[events,setEvents]=useState([]);
    const[selectedEvent,setSelectedEvent]=useState(null);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/events/")
        .then((response)=>setEvents(response.data));
    },[]);
    return(
        <div>
            {events.map((event)=>(
                <div class ="event-card"
                   key={event.id}
                //    style={{
                //     border:"1px solid #ccc",
                //     marginBottom:"10px",
                //     padding:"20px ",
                //    }}
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOjDhvW50e9P9946H5YOIxNLXv40rI2i6Hw&s" alt={event.title} />
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <button class="btn" onClick={()=>setSelectedEvent(event)}>
                        Book Now
                    </button>
                    </div>
                ))}
                {selectedEvent && <BookingForm event={selectedEvent}/>}
        </div>
    )
}
export default EventList;
