let isDefault = true;

function toggleImage() {
  const profileImage = document.getElementById('profileImage');
  const body = document.body;

  if (isDefault) {
    profileImage.src = './assets/avatar2.png';
    body.style.backgroundColor = '#f0f0f0';

  } else {
    profileImage.src = './assets/avatar.png';
    body.style.backgroundColor = '#ffffff';
  }

  isDefault = !isDefault;

}

let isLightMode = true;

function toggleMode() {
  const body = document.body;
  const switchButton = document.getElementById('switch');

  if (isLightMode) {
    html.classList.remove('light');
    switchButton.classList.remove('light');
  } else {
    html.classList.add('light');
    switchButton.classList.add('light');
  }

  isLightMode = !isLightMode;
}
