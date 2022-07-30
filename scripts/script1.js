var discuss = document.querySelector('#discuss');
var center = document.querySelector('#center');
var content = document.querySelector('#content');
var rightContent = document.querySelector('.rightContent');
var smallFone = document.querySelector('#smallFone');
discuss.addEventListener('click', () => {
  if(discuss.classList.contains('discussActive')) {
    discuss.classList.remove('discussActive');
    center.classList.remove('hideCentral');
    content.classList.remove('hideContent');
    rightContent.style.backgroundImage = "none";
    smallFone.classList.add('displayBlock');
  }
  else {
    rightContent.style.backgroundImage = "url('images/Component1.png')";
    smallFone.classList.remove('displayBlock');
    discuss.classList.add('discussActive');
    center.classList.add('hideCentral');
    content.classList.add('hideContent');
  }
  if(typeof window != "undefined" && window.innerWidth > 2700) {
    smallFone.classList.remove('displayBlock');
    rightContent.style.backgroundImage = "url('images/Component1.png')";
  }
});
var check = document.querySelector('#check');
var wrap_check = document.querySelector('.wrap_check');
check.addEventListener('change', () => {
  wrap_check.classList.toggle('fullColor');
});
var selectField = document.querySelector('#selectField');
var selectArrow = document.querySelector('#selectArrow');
var methodOfCommunication = document.querySelector('#methodOfCommunication');

selectField.addEventListener('click', () => {
  selectArrow.classList.add('rotateArrow');
});
selectField.addEventListener('change', () => {
  methodOfCommunication.innerHTML = `Your ${selectField.value}`;
  selectField.value == 'Email' ?
  typeOfPlaceholder.placeholder = 'JohnsonSmith@acme.com' :
  selectField.value == 'Telegram' ?
  typeOfPlaceholder.placeholder = '@' :
  typeOfPlaceholder.placeholder = '';
  selectArrow.classList.remove('rotateArrow');
});
window.addEventListener('resize', () => {
  if(typeof window != "indefined" && window.innerWidth > 2500) {
    smallFone.style.width = '100%';
  }
  else {
    smallFone.style.width = 'auto';
  }
});
