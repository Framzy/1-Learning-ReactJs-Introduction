import { useState } from "react";
import "./Contact.css";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useState(initialData);

  function handleNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }
  function handleMessageChange(e) {
    setContact({ ...contact, message: e.target.value });
  }

  return (
    <div className="contact-container">
      <div className="header">
        <h1 className="title">Contact</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <div>
        <h1>Contact Detail</h1>
        <p>Name : {contact.name}</p>
        <p>Message : {contact.message}</p>
      </div>
    </div>
  );
}
