<script>
    // Define the contact links
    const contactLinks = {
      telegram: 'https://t.me/Psycho_the_rapis_t',
      whatsapp: 'https://api.whatsapp.com/send?phone=17869019604',
      skype: 'skype:injenue1?chat'
    };
  
    // Open the appropriate link on image click
    function redirectTo(contact) {
      const url = contactLinks[contact];
      if (url) {
        window.open(url, '_blank'); // Open the link in a new tab or app
      }
    }
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      height: 100vh;
      text-align: center;
      padding: 20px;
    }
    .icons {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-top: 20px;
    }
    .icon {
      width: 60px;
      height: 60px;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .icon:hover {
      transform: scale(1.1);
    }
  </style>
  
  <div class="container text-2xl text-center text-gray-700">
    <h1>Выберите способ связи:</h1>
  
    <div class="icons">
      <!-- Telegram Icon -->
      <img
        class="icon m-3"
        src="images/other/telegram.svg"
        alt="Telegram"
        on:click={() => redirectTo('telegram')}
      />
      <!-- WhatsApp Icon -->
      <img
        class="icon m-3"
        src="images/other/whatsapp.svg"
        alt="WhatsApp"
        on:click={() => redirectTo('whatsapp')}
      />
      <!-- Skype Icon -->
      <img
        class="icon m-3"
        src="images/other/skype.svg"
        alt="Skype"
        on:click={() => redirectTo('skype')}
      />
    </div>
  </div>