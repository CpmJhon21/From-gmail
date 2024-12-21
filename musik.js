document.getElementById('emailChoice').addEventListener('change', function() {
      var messageField = document.getElementById('messageField');
      if (this.value === 'requestGmail') {
        messageField.classList.remove('hidden');
      } else {
        messageField.classList.add('hidden');
      }
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var successPopup = document.getElementById('successPopup');
      successPopup.classList.remove('hidden');
    });

    document.getElementById('closePopup').addEventListener('click', function() {
      var successPopup = document.getElementById('successPopup');
      successPopup.classList.add('hidden');
    });

    document.getElementById('menuButton').addEventListener('click', function() {
      var mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('load', function() {
      var splashScreen = document.getElementById('splashScreen');
      setTimeout(function() {
        splashScreen.classList.add('hidden');
        var backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.play();
      }, 3000); // Adjust the timeout as needed
    });
