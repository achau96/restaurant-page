import './index.css'

function Menu () {
  const items = ['iced tea', 'slush','real fruit'];
  const content = document.createElement('div');
  content.id = 'content';

  const header = document.createElement('h1');
  header.textContent = 'Bobalicious Menu';

  const gridContainer = document.createElement('div');
  const item1 = document.createElement('div');

  content.appendChild(header);
  return content;
}

export default Menu;
