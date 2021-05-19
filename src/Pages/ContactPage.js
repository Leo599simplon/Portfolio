import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
// import location from "../img/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Me contacter"} span={""} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29818.30865205477!2d55.418587614965645!3d-20.90070626652948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f05b553a0b7%3A0xf3dfd3c41fba03b4!2sSaint-Denis%2097400%2C%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1620316610260!5m2!1sfr!2sfr"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+262 693 82 91 23"}
            title={"Téléphone"}
          />
          <ContactItem
            icon={email}
            text2={"Leo599simplon@gmail.com"}
            title={"Email"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
