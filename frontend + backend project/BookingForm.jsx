import { useState } from "react";
import axios from "axios";

function BookingForm({event}) {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[seats,setSeats]=useState(1);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/bookings/",{
            event:event.id,
            name,
            email,
            seats,
        });
        alert("Booking successfully");
        setName(" ");
        setEmail(" ");
        setSeats(1);
       };
       return(
        <form onSubmit={handleSubmit}>
            <div className="booking-container">
            <h2>Book: {event.title}</h2>
            <input type="text" placeholder="Your name" value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br/>
            <input type="email" placeholder="Your email" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <input type="number"  value={seats}
            onChange={(e)=>setSeats(e.target.value)}
            />
            <br/>
            <button type="submit">Confirm Booking</button>
            </div>
    </form>
    
       )
}
export default BookingForm;