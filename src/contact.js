import './index.css'
import Map from './map.jpeg'

function Contact () {
  const content = document.createElement('div');
  content.id = 'content';

  const header = document.createElement('h1');
  header.textContent = 'Contact Us';

  const message = document.createElement('div');
  message.textContent = 'Come by and treat yourself to a bubble tea!'

  const img = document.createElement('img');
  img.src = Map;
  img.classList.add('images');

  const form = document.createElement('form');
  form.setAttribute('method','post');
  form.setAttribute('action','/submit');
  form.classList.add('form');

  const firstName = document.createElement('input');
  firstName.setAttribute('type','text');
  firstName.setAttribute('name','firstName');
  firstName.setAttribute('placeholder','First Name');

  const lastName = document.createElement('input');
  lastName.setAttribute('type','text');
  lastName.setAttribute('name','lastName');
  lastName.setAttribute('placeholder','Last Name');

  const email = document.createElement('input');
  email.setAttribute('type','email');
  email.setAttribute('name','email');
  email.setAttribute('placeholder','example123@example.com');

  const text = document.createElement('textarea');
  text.setAttribute('placeholder','Write your message here...');
  text.style.height = '120px';

  const submit = document.createElement('input');
  submit.setAttribute('type','submit');
  submit.classList.add('submit');

  form.appendChild(firstName);
  form.appendChild(lastName);
  form.appendChild(email);
  form.appendChild(text);
  form.appendChild(submit);

  submit.addEventListener('click',function(e){
    console.log('something should be done here!');
    e.preventDefault();
  })
  content.appendChild(header);
  content.appendChild(message);
  content.appendChild(form);
  content.appendChild(img);
  return content;
}

export default Contact;
