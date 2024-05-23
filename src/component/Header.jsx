import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Header.css";
import instagram from "../images/instagram.png";
import linkedIn from "../images/in.png";
import pic from "../images/pic.jpg";

const Header = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3ks4wfm", "template_534gqec", e.target, "5RlS8w6LhxqML2zNh")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      message: "",
    });
  };

  return (
    <div className="main">
      <div>
        <div className="head">
          <ul className="list">
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Testimonials</li>
          </ul>
          <div>
            <ul className="list2">
              <li>
                <img
                  src={instagram}
                  alt=""
                  style={{ color: "white" }}
                  width={30}
                />
              </li>
              <li>
                <img
                  src={linkedIn}
                  alt=""
                  style={{ color: "white" }}
                  width={20}
                />
              </li>
              <li>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        <>
          <p
            style={{
              display: "flex",

              color: "white",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
            }}
          >
            ANTI.AI - ARTIFICIAL NUANCES TACTICAL INFILTRATION
          </p>
        </>
        <div
          style={{
            display: "flex",
            paddingBottom: "20px",
            marginLeft: "50px",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "500px" }}>
            <h1 style={{ color: "white" }}>Save Modern Technology</h1>
            <p style={{ color: "white" }}>
              Join the fight to Save Modern Technology with ANTI-AI - a trusted
              technology business dedicated to preserving and advancing the
              benefits of cutting-edge innovation in our rapidly evolving world.
            </p>
          </div>
          <img src={pic} alt="" width={700} height={400} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "100px", width: "500px" }}>
          <h6 style={{ color: "white" }}>ABOUT US</h6>
          <p style={{ color: "white", fontSize: "48px" }}>
            Welcome to ANTi-AI - Artificial Nuances Tactical Infiltration
          </p>
        </div>
        <p style={{ color: "white", fontSize: "22px", width: "470px" }}>
          At ANTI AI, we stand as a formidable shield against the unintended
          consequences of AI processes, ensuring the responsible harnessing of
          artificial intelligence for the betterment of humanity and society. In
          a world where innovation is rapid and technology is ever-evolving.
        </p>
      </div>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li style={{ width: "250px" }}>
            <h4 style={{ color: "white" }}>Regular Updates</h4>
            <p style={{ color: "white" }}>
              Our systems stay ahead with regular updates, adapting to the
              ever-evolving AI landscape.
            </p>
          </li>
          <li style={{ width: "250px" }}>
            <h4 style={{ color: "white" }}>Real-time Monitoring</h4>
            <p style={{ color: "white" }}>
              ANTI AI keeps a watchful eye on AI processes, providing real-time
              updates and alerts.
            </p>
          </li>
          <li style={{ width: "250px" }}>
            <h4 style={{ color: "white" }}>Protection Against AI</h4>
            <p style={{ color: "white" }}>
              Protection Against AI Take your business serverless with a modern
              API pipeline and code-free data exploration app, all powered by
              our tailored, enterprise-scale platform.
            </p>
          </li>
        </ul>
      </div>
      <h1 style={{ color: "white", display: "flex", justifyContent: "center" }}>
        Launch Date
      </h1>
      <div>
        <ul style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "red" }}>0</h1>
            <h5 style={{ color: "white" }}>Days</h5>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "red" }}>0</h1>
            <h5 style={{ color: "white" }}>Hours</h5>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "red" }}>0</h1>
            <h5 style={{ color: "white" }}>MINUTES</h5>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "red" }}>0</h1>
            <h5 style={{ color: "white" }}>SECONDS</h5>
          </li>
        </ul>
      </div>
      <hr style={{ color: "grey" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <h5>OUR RESULTS</h5>
        <h1>Client Satisfaction- Fueling Our Success</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ color: "white", width: "500px", marginLeft: "50px" }}>
          <h4>CONTACTS</h4>
          <p style={{ fontSize: "48px" }}>How to Find Us</p>
          <p style={{ fontSize: "18px" }}>
            If you have any questions, just fill in the contact form, and we
            will answer you shortly.
          </p>
          <p style={{ fontSize: "24px" }}>9116-665513</p>
          <p>
            Co-work Town - 52/210, Padmani VT Rd, Ward 27, Mansarovar Sector 5,
            Mansarovar, Jaipur, Rajasthan 302020
          </p>
          <h4>hello@antiai.ltd</h4>
        </div>
        <div style={{ color: "white" }}>
          <h5>SAY HI</h5>
          <h1>Drop Us a Message</h1>
          <form onSubmit={sendEmail}>
          <span>
            <input
              type="text"
              name="user_name"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                fontSize: "15px",
                border:'none',
                borderRadius:'20px'
              }}
              placeholder="Your name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
            />
            &nbsp;
            <input
              type="text"
              name="user_email"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                fontSize: "15px",
                border:'none',
                borderRadius:'20px'
              }}
              placeholder="Your Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            />
          </span>
          <div>
            <br />
            <input
              type="number"
              name="user_phone"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                fontSize: "15px",
                width: "350px",
                border:'none',
                borderRadius:'20px'
              }}
              placeholder="Your Phone *"
              value={formData.phone}
             maxLength={10}
              onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
            />
            <br />
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              value={formData.message}
              style={{width:'250px',height:'100px',borderRadius:'10px',padding:'10px'}}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <div>
            {" "}
            <button
              type="submit"
              style={{
                backgroundColor: "#049881",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "10px",
                width:'280px'
              }}
            >
              Send Message
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
