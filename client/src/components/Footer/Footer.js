import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="body-footer">
        <div className="Footer">
          <div className="footer-left">
            <span className="span-footer">LEFT</span>
          </div>

          <div className="footer-right">
            <div className="description-container">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
