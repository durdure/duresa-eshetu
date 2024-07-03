import React, {useState} from 'react'
import styles from "./ContactStyles.module.css"

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "964665b0-58c8-4fef-8b88-b09c17c93435");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id='contact' className={styles.contactContainer}>
        <h1 className='sectionTitle'>
            Contact
        </h1>
        <form action="" onSubmit={onSubmit}>
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                type="text"
                name='name'
                id='name'
                placeholder='Name'
                required
                 />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                type="text"
                name='email'
                id='email'
                placeholder='Name'
                required
                 />
            </div>

            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>

                <textarea name="message" id="message"
                placeholder='Message'
                required
                >
                </textarea>
            </div>
            <input type="submit" className='hover btn' value= "submit" />
        </form>
        <span>
            {result}
        </span>
    </section>
  )
}

export default Contact