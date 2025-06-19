function deactivatePopup(event) {
    var currentTarget = event.currentTarget;
    var target = event.target;

    if (target !== currentTarget && !currentTarget.classList.contains('popup__close-button') && currentTarget.contains(target)) {
      return;
    }
    if (!currentTarget.classList.contains('popup__close-button')){
      currentTarget.classList.remove('popup-overlay--active');
    } else {
      currentTarget.closest('.popup-overlay')?.classList.remove('popup-overlay--active');
    }
    toggleScroll(true);
  }

  function activatePopup(element) {
    if (element) {
      element.querySelector('.popup-overlay')?.classList.add('popup-overlay--active');
      toggleScroll(false);
    }
  }

  function toggleScroll(isScrollDisabled) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isScrollDisabled) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    } else {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollBarWidth + 'px';
    }
  }