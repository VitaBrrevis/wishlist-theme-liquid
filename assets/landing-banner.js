window.addEventListener('DOMContentLoaded', () => {
  const scrollDownButton = document.querySelector('.landing-banner-content__scroll-button');
  scrollDownButton?.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    const nextSectionPosition = scrollDownButton.closest('.landing-banner')?.nextElementSibling?.offsetTop || 0;
    const scrollToNumber = nextSectionPosition + 140;
    window.scrollTo({
      top: scrollToNumber,
      behavior: "smooth"
    })
  })
})