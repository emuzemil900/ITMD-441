(function() {
  
  const heroHeadline = document.querySelector('.hero h1');
  if (heroHeadline) {
    heroHeadline.textContent = 'Supercharge Your Brand with Stellar Marketing';
  }
  
  const heroSubheadline = document.querySelector('.hero p');
  if (heroSubheadline) {
    heroSubheadline.innerHTML = 'Leverage innovative strategies from Stellar Marketing to make your business <b><i>shine</i></b> and <b><i>succeed</i></b>.';
  }

  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.backgroundImage = 'url("https://picsum.photos/id/683/1280/720")';
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
  }

  const getStartedCta = document.querySelector('.hero .button');
  if (getStartedCta) {
    getStartedCta.remove();
  }

  const navBar = document.querySelector('nav');
  const footer = document.querySelector('footer');
  if (navBar && footer) {
    const footerBgColor = window.getComputedStyle(footer).backgroundColor;
    navBar.style.backgroundColor = footerBgColor;
  }
  
})();
