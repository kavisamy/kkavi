import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="container">
  <div className="text-align:center">
    <h2>Contact Us</h2>
  </div>

  <div className="row">
    <div className="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="Dist">Dist</label>
        <select id="TamilNadu" name="TamilNadu">
          <option value="Trichy">Trichy</option>
          <option value="Cova">Cova</option>
          <option value="Chennai">Chennai</option>
        </select>
        <br></br>
        <label for="subject">Subject</label>
        <input type="text" id ="subject"placeholder="your subject..."/>
      </form>
    </div>
  </div>
  </div>
  );
}

export default Contact

