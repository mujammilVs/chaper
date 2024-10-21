import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareThreads } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-section-newsletter">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <h3>
            Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut
            Necesbus Enim
          </h3>
          <div className="subscribe">
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section">
          <h2>ABOUT US</h2>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>OUR SERVICES</h2>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="footer-section">
          <h2>GET IN TOUCH</h2>
          <address>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </address>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="about-chaperone">
          <h2>CHAPERONE</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            aperiam quos unde enim debitis excepturi iste, amet a itaque magni
            quae, molestias cumque eligendi quam odio similique quod numquam
            expedita?
          </p>
        </div>

        <div className="social-links">
          <h2>Follow us on</h2>
          <ul>
            <li>
              <a href="#" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaSquareThreads />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>
          <hr />
          <p>© 2023, chaperone.com All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
