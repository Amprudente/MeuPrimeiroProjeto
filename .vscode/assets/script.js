let isDefault = true;

function toggleImageAndBackground() {
  const profileImage = getElementById('profileImage');
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
