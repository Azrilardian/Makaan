import CONFIG from '../globals/config';

const slideEffect = (slider, size, counter) => (slider.style.transform = `translateX(${-size * counter}px)`);

const SliderInit = () => {
  const slider = document.querySelector('.testimonials__testimonial__contents-wrap__contents');
  const sliderContent = document.querySelectorAll('.testimonials__testimonial__contents-wrap__contents__content');
  let counter = 0;
  const size = sliderContent[0].clientWidth;

  setInterval(() => {
    counter++;
    slider.style.transition = '.7s ease-in-out';
    slideEffect(slider, size, counter);
    slider.addEventListener('transitionend', () => {
      if (sliderContent[counter].id === 'first-clone') {
        slider.style.transition = '';
        slideEffect(slider, size, counter);
        counter = 0;
      }
    });
  }, CONFIG.SLIDE_PAUSE);
};

export default SliderInit;
