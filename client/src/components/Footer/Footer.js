import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="body-footer">
        <div className="Footer">
          <div className="container-footer">
            <div className="row-footer">
              <div className="col-footer">
                <h4 className="h4-footer">About</h4>
                <ul className="ul-footer">
                  <li>
                    <a href="/">about us</a>
                  </li>
                  <li>
                    <a href="/">our services</a>
                  </li>
                  <li>
                    <a href="/">privacy policy</a>
                  </li>
                  <li>
                    <a href="/">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div className="col-footer">
                <h4 className="h4-footer">Technologies</h4>
                <ul className="ul-footer">
                  <li>
                    <a href="/">about us</a>
                  </li>
                  <li>
                    <a href="/">our services</a>
                  </li>
                  <li>
                    <a href="/">privacy policy</a>
                  </li>
                  <li>
                    <a href="/">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div className="col-footer">
                <h4 className="h4-footer">Contact me</h4>
                <ul className="ul-footer">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="contact-icons"
                    />
                  </a>

                  <a href="/">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="contact-icons"
                    />
                  </a>

                  <a href="/">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-icons"
                    />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
