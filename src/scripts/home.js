// Assets
// import pruHero from '../app/assets/pru-hero.png'
// import evolutionSq from '../app/assets/evolution-sq.jpg';
// import migrationSq from '../app/assets/migration-sq.jpg';

// Logo Animation
function setUpAnimation() {
  const hyunTitle = document.querySelector('.hyun-title');
  const hyunLetters = document.querySelectorAll('.hyun-logo__letter');
  const hyunIllustration = document.querySelector('.hyun-illustration');
  const link = document.querySelector('.hero-link');
  const nav = document.querySelector('.hyun-nav');
  const lines = document.querySelector('.bg-lines');

  hyunTitle.addEventListener('animationend', () => {
    window.setTimeout(function() {
      hyunLetters.forEach(function(el ,i) {
        el.classList.add('hidden');
      })
      nav.classList.add('show');
      lines.classList.remove('hidden');
      link.classList.remove('hidden');
      hyunIllustration.classList.remove('hidden');
    }, 200)
  })
}

function preventAnimation() {
  const heroSection = document.querySelector('.section-hero');
  const hyunLetters = document.querySelectorAll('.hyun-logo__letter');
  const hyunIllustration = document.querySelector('.hyun-illustration');
  const nav = document.querySelector('.hyun-nav');
  const lines = document.querySelector('.bg-lines');

  heroSection.classList.add('no-animation');
  hyunLetters.forEach(function(el ,i) {
    el.classList.add('hidden');
  })
  nav.classList.add('show');
  lines.classList.remove('hidden');
  link.classList.remove('hidden');
  hyunIllustration.classList.remove('hidden');
}

// Cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  let cookieStr = cname + "=" + cvalue + "; " + expires + "; path=/"
  document.cookie = cookieStr;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let previousVisit = getCookie("previousVisit");
  if (previousVisit !== "yes") {
    setUpAnimation();
    setCookie("previousVisit", "yes", 2)
  } else {
    preventAnimation();
  }
}

window.addEventListener('load', checkCookie);