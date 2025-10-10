import "./Contact.css";
import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData);

  function handleNameChange(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }
  function handleMessageChange(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
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
