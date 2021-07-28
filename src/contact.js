import './index.css'

function Contact () {
  const content = document.createElement('div');
  content.id = 'content';

  const header = document.createElement('h1');
  header.textContent = 'Contact Information';

  content.appendChild(header);
  return content;
}

export default Contact;
