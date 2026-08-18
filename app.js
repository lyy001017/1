document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page-view');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.page;
      navItems.forEach(btn => btn.classList.toggle('active', btn === item));
      pages.forEach(page => {
        page.classList.toggle('active', page.dataset.view === target);
      });
    });
  });

  const modes = document.querySelectorAll('.mode-btn');
  modes.forEach(mode => {
    mode.addEventListener('click', () => {
      modes.forEach(btn => btn.classList.remove('active'));
      mode.classList.add('active');
    });
  });

  const date = document.getElementById('current-date');
  const time = document.getElementById('current-time');

  function updateTime(){
    const now = new Date();
    if(date) date.textContent = now.toISOString().slice(0,10);
    if(time) time.textContent = now.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'});
  }
  updateTime();
  setInterval(updateTime,1000);
});
