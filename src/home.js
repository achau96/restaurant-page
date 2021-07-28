import './index.css';
import Milktea from './milktea.jpeg';

function Component () {
  const content = document.createElement('div');
  content.id = 'content';

  const header = document.createElement('h1');
  header.textContent = 'Bobalicious';

  const img = document.createElement('img');
  img.src = Milktea;
  img.classList.add('images');

  const header2 = document.createElement('h2');
  header2.textContent = '~ The bliss of a sip ~';

  const text = document.createElement('p');
  text.textContent = 'Since 1986, the #1 bubble tea in all of Canada.';

  const deal = document.createElement('p');
  deal.textContent = 'Get your own re-usable metal straw for only $5';
  deal.classList.add('deal');

  content.appendChild(header);
  content.appendChild(img);
  content.appendChild(header2);
  content.appendChild(text);
  content.appendChild(deal);

  return content;
}

export default Component
