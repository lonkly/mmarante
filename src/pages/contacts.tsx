/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import { navigate } from "gatsby";

const ContactsComponent: React.FC = () => {
  const handleButtonClick = (contact: string) => {
    navigate(`/contacts/thank-you?contact=${contact}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Layout color="#DDC8C4">
        <div style={{ flex: 1, padding: '20px' }}>
          <h3>Выберите способ связи</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#" onClick={() => handleButtonClick('telegram')}>
              <img src="../../../files/telegram.svg" alt="Telegram" width="50" height="50" />
            </a>
            <p> </p>
            <a href="#" onClick={() => handleButtonClick('whatsapp')} style={{ marginLeft: '40px' }}>
              <img src="../../../files/whatsapp.svg" alt="WhatsApp" width="65" height="65" />
            </a>
            <p> </p>
            <a href="#" onClick={() => handleButtonClick('skype')} style={{ marginLeft: '40px' }}>
              <img src="../../../files/skype.svg" alt="Skype" width="50" height="50" />
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ContactsComponent;