import React from 'react'

function Contact() {
  return (
    <div>
  <section className="contact" id="contact">
    <div className="container">
      <div className="contact-content">
        <h2>What can we do for you</h2>
        <p>We are ready to work on projects of any complexity, whether it's commercial or residential</p>
        <form action="">
          <div className="form row">
            <input type="text" name="" id="" placeholder="Your Name*" />
            <input type="email" name="" id="" placeholder="Email*" />
            <select name="" id="">
              <option value="0">Reason for Contact</option>
              <option value="1">Fixing</option>
              <option value="2">Jewelry Appraisal</option>
              <option value="3">Jewelry Repair</option>
              <option value="4">Ring Sizing</option>
              <option value="5">Stone Replacement</option>
              <option value="6">Jewelry Cleaning</option>
            </select>
            <input type="tel" name="" id="" placeholder="Phone" />
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Write in details.."></textarea>
            <p>* Indicate a required field.</p>
          </div>
          <button type="submit" className="page-btn-2">Submit</button>
        </form>
      </div>
    </div>
  </section>
</div>
  )
};

export default Contact
