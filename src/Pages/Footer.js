/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/amrgamal0/"
              target="_blank"
              rel="preferrer noreferrer"
            >
              <ImFacebook2 className="socialIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amr-gamal-3b6b70198/?locale=en_US"
              target="_blank"
              rel="preferrer noreferrer"
            >
              <GrLinkedin className="socialIcon" />
            </a>
          </li>
        </ul>
        <span >
          © 2023 Created By Amr Gamal
        </span>
      </div>
    </div>
  );
}
