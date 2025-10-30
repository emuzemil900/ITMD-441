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

  const newSection = document.createElement('section');
  newSection.style.backgroundColor = '#6495ed';
  newSection.style.paddingTop = '32px';
  newSection.style.paddingBottom = '32px';
  newSection.style.display = 'flex';
  newSection.style.justifyContent = 'center';
  newSection.style.alignItems = 'center';

  const newCtaButton = document.createElement('button');
  newCtaButton.textContent = 'Schedule a Consultation Today';
  newCtaButton.style.backgroundColor = 'white';
  newCtaButton.style.color = '#007bff';
  newCtaButton.style.border = '4px solid #007bff';
  newCtaButton.style.padding = '12px 24px';
  newCtaButton.style.fontSize = '1.25rem';
  newCtaButton.style.borderRadius = '5px';
  newCtaButton.style.cursor = 'pointer';
  newCtaButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

  newCtaButton.addEventListener('click', () => {
    alert('Thank You for your interest in Stellar Marketing!');
  });
  
})();
