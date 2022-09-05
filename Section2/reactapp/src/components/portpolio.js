import React from 'react'

const portpolio = () => {
  return (
    <>
  {/* <header className="bg-image">
    <div className="container">
      <h1>Landing Page Design</h1>
      <h2>Parallax | Modern | Responsive</h2>
      <a href="#" className="btn btn-transparent">
        Start Here.
      </a>
    </div>
  </header> */}
  <section className="">
    <div className="container">
      <div className="col-3 text--center">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/366117/8_copy_copy.jpg"
          alt=""
          className="details-img--ball"
        />
      </div>
      <div className="col-7 details">
        <h3>SAMPLE TEMPLATE</h3>
        <p>Simple Parallax Landing Page</p>
      </div>
    </div>
  </section>
  <section className="section--primary">
    <div className="container">
      <div className="col-3 features">
        <i className="fa fa-bolt" />
        <p>"Say cool stuff here"</p>
      </div>
      <div className="col-3 features">
        <i className="fa fa-bank" />
        <p>
          This is why it's great. Here's the one thing you should know about
          this product.
        </p>
      </div>
      <div className="col-3 features">
        <i className="fa fa-heart" />
        <p>Still curious? Find out more by clicking on the link.</p>
      </div>
    </div>
  </section>
  <section className="section--primary--alt">
    <div className="container">
      <h3>Remember this brand.</h3>
      <p>
        Use this template for business, portfolio, ecommerce, blogs.Simple
        setup, add content, link to more content -- modern and beautiful!
      </p>
    </div>
  </section>
  <section className="section--primary--light">
    <div className="container">
      <blockquote className="testimonial">
        <p>
          Slick parallax! Clean design that's easy to read! Gets your message
          across with no distractions. Love it!"
        </p>
        <cite>Satisfied Customer</cite>
      </blockquote>
    </div>
  </section>
  <section className="section--primary--alt bg-image bg-image-2">
    <div className="container text--center">
      <h3>Reasons to buy this product:</h3>
      <div className="col-5 text--left">
        <ul>
          <li>Its the best</li>
          <li>Its awesome</li>
          <li>It makes you happy</li>
          <li>It brings world peace</li>
          <li>Its free!</li>
        </ul>
      </div>
      <div className="col-5 text--left">
        <ul>
          <li>You're the best</li>
          <li>You're awesome</li>
          <li>You make you happy</li>
          <li> You bring world peace</li>
          <li>You like free!</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="text--center">
    <div className="container">
      <h3>You know you like it.</h3>
      <a href="#" className="btn">
        Customize yours now!
      </a>
    </div>
  </section>
  <footer>
    <div className="container">
      <ul>
        <li>
          <a href="#">Weblinks</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Mainpage</a>
        </li>
      </ul>
      <p>© 2016 CGP Designs. All rights reserved.</p>
    </div>
  </footer>
</>

  )
}

export default portpolio