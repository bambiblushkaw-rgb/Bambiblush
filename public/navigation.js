
(()=>{const button=document.querySelector('.pc-menu-toggle'),panel=document.querySelector('.pc-submenu'),menu=document.querySelector('.mobile-toggle'),nav=document.querySelector('.nav-links');if(!button||!panel)return;const close=()=>{button.setAttribute('aria-expanded','false');panel.hidden=true};button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));panel.hidden=!open});document.addEventListener('click',e=>{if(!e.target.closest('.pc-menu'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){close();button.focus()}});if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));if(!open)close()});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{close();nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}})();

// Keep the selected navigation option pink across routes and anchored sections.
(()=>{
 const nav=document.querySelector('.nav-links');if(!nav)return;
 const pc=nav.querySelector('.pc-menu-toggle');
 const links=[...nav.querySelectorAll('a')];
 const key='bambiblush-navigation';
 function paint(element){
  nav.querySelectorAll('.is-active').forEach(el=>{el.classList.remove('is-active');el.removeAttribute('aria-current')});
  if(element){element.classList.add('is-active');element.setAttribute('aria-current','page');if(element.closest('.pc-submenu'))pc?.classList.add('is-active')}
 }
 function fromLocation(){
  let saved;try{saved=JSON.parse(sessionStorage.getItem(key)||'null')}catch{}
  const here=location.pathname+location.hash;
  if(saved&&saved.path===here){const found=links.find(a=>a.textContent.trim()===saved.label);if(found){paint(found);return}}
  if(location.hash==='#tutoriales'){paint(links.find(a=>a.textContent.trim()==='Tutoriales'));return}
  if(location.pathname.startsWith('/pc-laptop/')||location.pathname.startsWith('/temas/')){paint(pc);return}
  if(location.pathname==='/cuenta'){paint(nav.querySelector('.account-link'));return}
  if(location.pathname==='/'){paint(links.find(a=>a.getAttribute('href')==='/'));return}
  paint(null);
 }
 links.forEach(a=>a.addEventListener('click',()=>{const u=new URL(a.href,location.href);try{sessionStorage.setItem(key,JSON.stringify({path:u.pathname+u.hash,label:a.textContent.trim()}))}catch{}paint(a)}));
 window.addEventListener('hashchange',fromLocation);window.addEventListener('pageshow',fromLocation);fromLocation();
})();
