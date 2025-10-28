(function() {
  
  const heroHeadline = document.querySelector('.hero h1');
    if (heroHeadline) {
      heroHeadline.textContent = 'Supercharge Your Brand with Stellar Marketing';
    }
  
  const heroSubheadline = document.querySelector('.hero p');
    if (heroSubheadline) {
      heroSubheadline.innerHTML = 'Leverage innovative strategies from Stellar Marketing to make your business <b><i>shine</b></i> and <b><i>succeed</b></i>.';
    }

  const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.style.backgroundImage = 'url("https://picsum.photos/id/683/1280/720")';
      heroSection.style.backgroundSize = 'cover';
      heroSection.style.backgroundPosition = 'center';
    }
  
})();
