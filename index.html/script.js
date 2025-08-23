 const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    
  function openPopup(formType) {
    document.getElementById('popup-container').style.display = 'flex';
    showForm(formType);
  }

  function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
  }

  function showForm(type) {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');

    if (type === 'login') {
      document.getElementById('login-form').classList.remove('hidden');
    } else {
      document.getElementById('register-form').classList.remove('hidden');
    }
  }

