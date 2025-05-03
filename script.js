// script.js
document.addEventListener('DOMContentLoaded',()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const toTop = document.getElementById('toTop');
    // бургер
    burger.addEventListener('click',()=>{
      nav.classList.toggle('active');
      burger.classList.toggle('toggle');
    });
    // кнопка наверх
    window.addEventListener('scroll',()=>{
      toTop.style.display = window.scrollY>300?'flex':'none';
    });
    toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  });

  // Аккордеон шаги
  document.querySelectorAll('.step button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const content = btn.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
  });
  // Табуляция
  document.querySelectorAll('.tab-buttons button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-buttons button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c=>c.style.display = 'none');
      document.getElementById(btn.dataset.tab).style.display = 'block';
    });
  });