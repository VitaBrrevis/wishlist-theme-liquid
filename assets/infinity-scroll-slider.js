class InfinityScrollSlider extends HTMLElement {
  constructor() {
    super();

    this.slider = null
  }

  connectedCallback() {
    if (!this.slider) {
      this.slider = new Swiper(this, {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        a11y: false,
        freeMode: true,
        speed: 8000,
        loop: true,
        slidesPerGroup: 1,
        autoplay: {
          delay: 0.5,
          disableOnInteraction: false
        },
      })
    }
  }
}
if (!customElements.get('infinity-scroll-slider')) {
  customElements.define('infinity-scroll-slider', InfinityScrollSlider)
}