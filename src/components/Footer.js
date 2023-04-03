import React from "react";
import "../Footer.css";
import { IonIcon } from "@ionic/react";
import { logoInstagram, logoSnapchat,logoFacebook,logoTwitter } from "ionicons/icons";

export default function Footer() {
  return (
    <div>
      {" "}
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://www.google.com">
              <IonIcon icon={logoInstagram} />
            </a>
            <a href="https://www.google.com">
              <IonIcon icon={logoSnapchat} />
            </a>
            <a href="https://www.google.com">
              <IonIcon icon={logoFacebook} />
            </a>
            <a href="https://www.google.com">
              <IonIcon icon={logoTwitter} />
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://www.google.com">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.google.com">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.google.com">About</a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.google.com">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.google.com">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">Company Name © 2018</p>
        </footer>
      </div>
    </div>
  );
}
