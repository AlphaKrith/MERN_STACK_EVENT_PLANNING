import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING's</h1>
          <p>Event's and Wedding</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div className="text">
            <input type="text" placeholder='E-Mail' />
            <button>Subscribe</button>
          </div>
          <p>Sign Up with your email to recieve latest news and updates!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
