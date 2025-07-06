function toggleLightMode() {
  const html = document.querySelector('html');
  const body = document.body;
  const profileImage = document.getElementById('profileImage');
}
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    profileImage.src = './assets/img-avatar.png/avatar1.png';
  } else {
    body.classList.add('light');
    profileImage.src = './assets/img-avatar.png/avatar2.png';
  }
  if (html.classList.contains('light')) {
    html.classList.remove('light');

  } else {
    html.classList.add('light');
  }
  if (body.classList.contains('light')) {
    body.classList.add('light');
    profileImage.src = './assets/img-avatar.png/avatar2.png';
    bodyButton.classList.add('light');
}
  if (html.classList.contains('light')) {
    html.classList.remove('light');

  } else {
    html.classList.add('light');
  }


//*function toggleProfileImageAndBackgroundImage() {
  //*const body = document.body;
  //*const profileImage = document.getElementById('profileImage');

 //* if (body.classList.contains('light')) {
    //*bodyButton.classList.remove('light');
   //* profileImage.src = ('./assets/img.svg/moonstars.svg');
  //*  body.classList.remove('light');

 //* if (body.classList.contains('light')) {
  //*  profileImage.src.includes = ('./assets/img-avatar.png/avatar1.png');
  //*  profileImage.src = ('./assets/img-avatar.png/avatar2.png');

//* } else {
   //* profileImage.src = ('./assets/img-avatar.png/Avatar1.png');

  //}

 //*   bodyClassLightMode = !bodyClassLightMode;
  //*