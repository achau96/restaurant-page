import './index.css'
import Component from "./home";
import Menu from "./menu";
import Contact from "./contact"

function navBar (tab) {
const nav = document.createElement('div');
nav.classList.add('navBar');
const homeTab = document.createElement('a');
const menuTab = document.createElement('a');
const contactTab = document.createElement('a');
homeTab.textContent = 'HOME';
homeTab.href='#home';
menuTab.textContent = 'MENU';
menuTab.href='#menu';
contactTab.textContent = 'CONTACT US';
contactTab.href='#contact';
homeTab.classList.add('active');

//change tab color on chosen
if(tab == 'home'){
  homeTab.classList.add('active');
  contactTab.classList.remove('active');
  menuTab.classList.remove('active');
} else if(tab == 'menu'){
  menuTab.classList.add('active');
  contactTab.classList.remove('active');
  homeTab.classList.remove('active');
}else if(tab == 'contact'){
  contactTab.classList.add('active');
  homeTab.classList.remove('active');
  menuTab.classList.remove('active');
}

//event listeners for all 3 and calls navBar with which tab to light up
menuTab.addEventListener('click',()=>{
  document.body.textContent = "";
  document.body.appendChild(navBar('menu'));
  document.body.appendChild(Menu());
})

contactTab.addEventListener('click',()=>{
  document.body.textContent = "";
  document.body.appendChild(navBar('contact'));
  document.body.appendChild(Contact());
})

homeTab.addEventListener('click',()=>{
  document.body.textContent = "";
  document.body.appendChild(navBar('home'));
  document.body.appendChild(Component());
})

nav.appendChild(homeTab);
nav.appendChild(menuTab);
nav.appendChild(contactTab);

return nav;
}

document.body.appendChild(navBar());
document.body.appendChild(Component());
