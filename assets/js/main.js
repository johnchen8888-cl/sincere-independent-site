const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.navlinks');
if(toggle&&nav){
  toggle.addEventListener('click',()=>nav.classList.toggle('show'));
}

// Real RFQ forms should submit normally.
// Only forms explicitly marked with data-demo="true" will show a demo alert.
const demoForms=document.querySelectorAll('form[data-demo="true"]');
demoForms.forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Demo only: connect this form before launch.');
}));
