import React from "react";
import ContactUsForm from "../../modules/ContactUsForm/components/ContactUsForm";

const ContactUs = ({ ...animation }) => {
  return (
    <section className="py-20">
      <div className="myWrapper">
        <ContactUsForm animation={animation}/>
      </div>
    </section>
  );
};

export default ContactUs;
