import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  function onChange(nextValue) {
    setDay(nextValue);
  }


  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    const timestampToString = JSON.stringify(day).slice(1, 11);

    onAdd({ text, name, timestampToString, time, reminder });

    setText("");
    setName("");
    setDay("");
    setTime("")
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
          <label>Add Name</label>
          <input
            type="text"
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
      </div>  
    
       <div className="form-control">
          <label>Add Service</label>
          <input
            type="text"
            placeholder="Add Service"
            value={text}
            onChange={(e) => setText(e.target.value)} 
          />
      </div>

      <div className="form-control calendar">
          <label>Select Date</label>
      </div>
      <div className="form-control calendar">
          <Calendar 
            onChange={onChange}
            value={day}
          />
      </div>
      <div className="form-control form-time">
          <label>Add Time</label>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="9 AM" className="select-time">9 AM</option>
            <option  value="10 AM" className="select-time">10 AM</option>
            <option  value="11 AM" className="select-time">11 AM</option>
            <option  value="11 AM" className="select-time">11 AM</option>
            <option  value="12 PM" className="select-time">12 PM</option>
            <option  value="1 PM" className="select-time">1 PM</option>
            <option  value="2 PM" className="select-time">2 PM</option>
            <option  value="3 PM" className="select-time">3 PM</option>
            <option  value="4 PM" className="select-time">4 PM</option>
          
          </select>
      </div>
      <div className="form-control form-control-check">
          <label>Add Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)} 
          />
      </div>

      <input type="submit" value="Set Appointment" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
