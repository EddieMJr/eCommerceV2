import React from 'react'
import { useState } from 'react'
import './Form.css'
import '../pages/shared.css'

function FormPage() {

  return (
    <>
      <main>
      <h1>any thoughts?</h1>
      <section id="input__section">
        <form id="contact__form" onsubmit="return validateForm()">
          <div id="formStyle">
            <label for="name__input">Name:</label>
            <input type="text" id="name__input" name="name" />
            <span id="nameError__span" style={{color: '#ff0000'}}></span>
          </div>

          <div id="formStyle">
            <label for="email__input">E-Mail:</label>
            <input type="text" id="email__input" name="email" />
            <span id="emailError__span" style={{color: '#ff0000'}}></span>
          </div>

          <div id="formStyle">
            <label for="comment__input">Comment:</label>
            <textarea id="comment__input" name="comment" rows="5"></textarea>
            <span id="commentError__span" style={{color: '#ff0000'}}></span>
          </div>

          <button type="submit">Submit</button>
        </form>

      </section>
    </main>
    </>
  )
}

export default FormPage