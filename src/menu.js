import './index.css';
import MilkTea from './milktea.jpeg';
import MangoSlush from './mangoslush.jpeg';

function Menu () {
  const items = ['iced tea', 'slush','real fruit'];
  const content = document.createElement('div');
  content.id = 'content';

  const header = document.createElement('h1');
  header.textContent = 'Bobalicious Menu';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid');

  for(let i=0;i<4;i++){
  const item1 = document.createElement('div');
  const img1 = document.createElement('img');
  const text1 = document.createElement('div');
  item1.classList.add('item');
  text1.textContent = 'Original Milk Tea\n5.00';
  img1.src = MilkTea;
  img1.classList.add('menu');
  item1.appendChild(img1);
  item1.appendChild(text1);

  const item2 = document.createElement('div');
  const img2 = document.createElement('img');
  const text2 = document.createElement('div');
  item2.classList.add('item');
  text2.textContent = 'Mango Slush\n5.50';
  img2.src = MangoSlush;
  img2.classList.add('menu');
  item2.appendChild(img2);
  item2.appendChild(text2);

  gridContainer.appendChild(item1);
  gridContainer.appendChild(item2);
  }


  content.appendChild(header);
  content.appendChild(gridContainer);
  return content;
}

export default Menu;
