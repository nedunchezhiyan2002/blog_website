import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" name="" id="" />
            <label>Email</label>
            <input type="email" name="" id="" />
            <label>Subject</label>
            <input type="text" name="" id="" />
            <label>Message</label>
            <textarea rows="6" placeholder="here"></textarea>
        </form>


    </div>
  )
}

export default Form