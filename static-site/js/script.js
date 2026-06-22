/* ============ Hero background video crossfade ============ */
(function () {
  const videos = document.querySelectorAll('.hero-video');
  const dots = document.querySelectorAll('#videoDots .dot');
  if (!videos.length) return;
  let active = 0;
  setInterval(function () {
    videos[active].classList.remove('active');
    if (dots[active]) dots[active].classList.remove('active');
    active = (active + 1) % videos.length;
    videos[active].classList.add('active');
    if (dots[active]) dots[active].classList.add('active');
  }, 6500);
})();

/* ============ Mobile nav toggle ============ */
(function () {
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('navMobile');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
})();

/* ============ Programs grid render ============ */
(function () {
  const PROGRAMS = [
    { tag: 'Amostragem', title: 'PEP de Amostragem', region: 'Programa Nacional', date: '16 Mar 2026', img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80' },
    { tag: 'Ambiental', title: 'Análises Ambientais', region: 'Programa Nacional', date: '30 Mar 2026', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80' },
    { tag: 'Óleos & Graxas', title: 'Óleos e Graxas', region: 'Programa Nacional', date: '20 Abr 2026', img: 'https://images.unsplash.com/photo-1614308457932-e16d85c5d057?auto=format&fit=crop&w=1200&q=80' },
    { tag: 'Sólidos', title: 'Série Sólidos', region: 'Águas residuárias', date: '20 Abr 2026', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80' },
    { tag: 'Físico-Química', title: 'Águas para Consumo', region: 'Programa Nacional', date: '12 Mai 2026', img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80' },
    { tag: 'Microbiologia', title: 'Microbiologia da Água', region: 'Programa Nacional', date: '08 Jun 2026', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80' }
  ];

  const grid = document.getElementById('programsGrid');
  if (!grid) return;
  grid.innerHTML = PROGRAMS.map(function (p) {
    return ''
      + '<article class="card">'
      +   '<div class="card-img-wrap">'
      +     '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy" class="card-img" />'
      +     '<div class="card-img-grad"></div>'
      +     '<span class="tag-confirmed"><span class="dot-green"></span> Confirmado</span>'
      +     '<span class="tag-category">' + p.tag + '</span>'
      +   '</div>'
      +   '<div class="card-body">'
      +     '<div class="card-region">' + p.region + '</div>'
      +     '<h3 class="card-title">' + p.title + '</h3>'
      +     '<div class="card-foot">'
      +       '<span class="card-date">' + p.date + '</span>'
      +       '<a href="#" class="card-link">Visualizar →</a>'
      +     '</div>'
      +   '</div>'
      + '</article>';
  }).join('');
})();
