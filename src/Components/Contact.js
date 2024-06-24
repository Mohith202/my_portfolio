import React, { useState } from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsGithub, BsTwitter, BsDiscord } from 'react-icons/bs'

const ContactCon = styled.div`
  background-color: rgb(30, 0, 60,0.5);
  color: gold;
  width: 85%;
  font-family: serif;
  
  position: absolute;
  top: 2195px;
  right: 0;
  padding: 10px;
  text-align: center;

  h2 {
    margin: 40px 0px 30px 0px;
    font-size: 2em;
  }
  @media (max-width: 640px) {
    width: 100%;
    top: 4355px;
  }
  @media (min-width: 592px) and (max-width: 640px) {
    top: 3395px;
  }
`
const Flexcol = styled.div`
  margin: 40px 0px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  label {
    margin: 5px;
  }
  input {
    margin: 5px 0px 25px 0px;
    width: 300px;
    height: 28px;
    padding: 8px 8px;
    font-size: 1.2em;
    border-radius: 5px;
    border: none;
    color: black;
    background-color: white;
  }
  textarea {
    margin: 10px 0px 25px 0px;
    width: 300px;
    padding: 8px 8px;
    font-size: 1.2em;
    border-radius: 5px;
    border: none;
  color: black;
    background-color: white;
  }
  .btnSubmit {
    cursor: pointer;
    width: 90px;
    background-color: gold;
    font-size: 1em;
    height: 30px;
    font-weight: bold;
    border-radius: 3px;
    border: none;
  }

  @media (max-width: 640px) {
    input {
      width: 80%;
      margin: 10px 12px;
    }
    textarea {
      // width: 100%;
      width: 80%;
      margin: 10px 12px 15px 20px;
    }
  }
`
const BtnHover = styled.button`
  &:hover {
    background-color: rgb(260, 240, 50);
  }
`
function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name && email && message) {
      const res = await fetch(
        'https://syed-contact-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name, email: email, message: message }),
        },
      )

      if (res) {
        alert('Submitted Successfully')
      } else {
        alert('Pls Fill The Form')
      }
      setName('')
      setEmail('')
      setMessage('')
    } else {
      alert('Pls Fill the Form')
    }
  }
  const Flexrow = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;

    .social {
      cursor: pointer;
      width: 100%;
      color: rgb(30, 500, 500);
      margin: 15px 5px;
      font-size: 1.5em;
      &:hover {
        color: gold;
      }
    }
  `
  const handleLinkedin = () => {
    if (window !== undefined) {
      window.open('https://www.linkedin.com/in/k-mohith-goud-128483258/')
    }
  }

  const handleGithub = () => {
    if (window !== undefined) {
      window.open('https://github.com/Mohith202')
    }
  }

  const handleTwitter = () => {
    if (window !== undefined) {
      window.open('https://x.com/Mohithgoud2002')
    }
  }

  return (
    <>
      <ContactCon id="contact">
        <h2>
          Lets Connect <span>🤝</span>
        </h2>

        <Flexrow>
          <BsLinkedin className="social" onClick={handleLinkedin} />

          <BsGithub className="social" onClick={handleGithub} />

          <BsTwitter className="social" onClick={handleTwitter} />
        </Flexrow>

        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <Flexcol>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label> Message</label>
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <BtnHover className="btnSubmit" type="submit">
              Submit
            </BtnHover>
          </Flexcol>
        </form>
      </ContactCon>
    </>
  )
}

export default Contact
