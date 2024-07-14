/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { navigate } from "gatsby";

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const contact = params.get('contact');

    let redirectUrl = '';
    switch (contact) {
      case 'telegram':
        redirectUrl = 'https://t.me/Psycho_the_rapis_t';
        break;
      case 'whatsapp':
        redirectUrl = 'https://api.whatsapp.com/send?phone=17869019604';
        break;
      case 'skype':
        redirectUrl = 'skype:injenue1?chat';
        break;
      default:
        break;
    }

    if (redirectUrl) {
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 500); // Adjust the delay as necessary
    }
  }, []);

  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#DDC8C4',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <h1>Thank you for getting in touch!</h1>
        <p>You will be redirected shortly...</p>
      </div>
    </div>
  );
};

export default ThankYouPage;