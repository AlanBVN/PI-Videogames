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
                    <p>
                      This was my individual project in Henry's bootcamp. I
                      developed this application that uses the video game API
                      from rawg.io and let the user create, search and filter
                      any game, from the api or the DB.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-footer">
                <h4 className="h4-footer">Technologies</h4>
                <ul className="ul-footer">
                  <li>
                    <p>
                      JavaScript, React, Redux, NodeJS, Express, PostgresSQL,
                      Sequelize
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-footer">
                <h4 className="h4-footer">Contact me</h4>
                <ul className="ul-footer">
                  <a href="https://www.linkedin.com/in/alan-bilvinas/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="contact-icons"
                    />
                  </a>

                  <a href="https://github.com/AlanBVN">
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
