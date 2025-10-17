import React from 'react'
import { useState } from 'react'
import './Form.css'
import '../pages/shared.css'

function FormPage() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // State for validation messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', email: '', comment: '' };

    // Name
    if (name.trim() === '') {
      newErrors.name = 'Please input your name.';
      valid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      newErrors.email = 'Please input your email in proper format.';
      valid = false;
    } else if (/\d/.test(name)) {
      newErrors.name = 'Name cannot contain numbers.';
      valid = false;
    }

    // Comment
    if (comment.trim() === '') {
      newErrors.comment = 'Please give us your thoughts or requests.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert('Form submitted successfully!');
      // Reset form (optional)
      setName('');
      setEmail('');
      setComment('');
    }
  };

  return (
    <main>
      <h1>Any thoughts?</h1>
      <h3>We use this page to get any feedback from our customers. Whether you're giving donations, letting us know your experience shopping or anything else, let us know!</h3>
      <section id="input__section">
        <form id="contact__form" onSubmit={validateForm}>
          <div id="formStyle">
            <label htmlFor="name__input">Name:</label>
            <input
              type="text"
              id="name__input"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span id="nameError__span" style={{ color: '#ff0000' }}>
              {errors.name}
            </span>
          </div>

          <div id="formStyle">
            <label htmlFor="email__input">E-Mail:</label>
            <input
              type="text"
              id="email__input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span id="emailError__span" style={{ color: '#ff0000' }}>
              {errors.email}
            </span>
          </div>

          <div id="formStyle">
            <label htmlFor="comment__input">Comment:</label>
            <textarea
              id="comment__input"
              name="comment"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <span id="commentError__span" style={{ color: '#ff0000' }}>
              {errors.comment}
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default FormPage