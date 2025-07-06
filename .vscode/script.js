function toggleLightMode() {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const img = document.querySelector('#profile img');

    if (html.classList.contains('light')) {
        html.classList.remove('light');
        body.classList.remove('light');
        img.setAttribute('src', './assets/img-avatar.png/Avatar1.png');

    } else {
        html.classList.add('light');
        body.classList.add('light');
        img.setAttribute('src', './assets/img-avatar.png/avatar2.png');
    }
  }
