barba.init({
  transitions: [{
    name: 'custom-transition',
    from: {
      namespace: [
        'home'
      ]
    },
    to: {
      namespace: [
        'tombs'
      ]
    },
    leave(){
      gsap.set(".text-container .text-col:nth-child(1)", { background: 'black'});
      gsap.to(".text-container .text-col:nth-child(2)", { ease: Power1.easeOut, xPercent: -105, duration: .2});
      gsap.to(".text-container .text-col:nth-child(3)", { ease: Power1.easeOut, xPercent: -210, duration: .4});
      gsap.fromTo(".tombs-wrapper", {xPercent: 41, opacity: 0.5},{ ease: Power1.easeOut, xPercent: 0, opacity: 1, duration: .4});

      const done = this.async();
      setTimeout(() => {
        done()
      }, 800);
    },
    beforeEnter(){
      createCarousel()
    },
    enter(){
      gsap.set(".text-container .text-col:nth-child(2)", { xPercent: -105});
      gsap.set(".text-container .text-col:nth-child(3)", { xPercent: -210});
      gsap.set(".text-container .text-col:nth-child(1)", { background: 'black'});

    }
  },{
    name: 't-t-h',
    from: {
      namespace: [
        'tombs'
      ]
    },
    to: {
      namespace: [
        'home'
      ]
    },
    leave(){
      gsap.set(".text-container .text-col:nth-child(1)", { background: 'black'});
      gsap.set(".text-container .text-col:nth-child(2)", { opacity: 1});
      gsap.set(".text-container .text-col:nth-child(3)", { opacity: 1});
      gsap.fromTo(".text-container .text-col:nth-child(2)", { xPercent: -105},  { ease: Power1.easeOut, xPercent: 0, delay: .2 ,duration: .2});
      gsap.fromTo(".text-container .text-col:nth-child(3)", { xPercent: -210}, { ease: Power1.easeOut, xPercent: 0, duration: .4});
      gsap.to(".tombs-wrapper", { ease: Power1.easeOut, xPercent: 41, opacity: 0.5, duration: .4});

      const done = this.async();
      setTimeout(() => {
        done()
      }, 600);
    },
    enter(){
      gsap.set(".tombs-wrapper", {xPercent: 41});

    }
  },
  {
    name: 't-t-h',
    from: {
      namespace: [
        'tombs',
        'home'
      ]
    },
    to: {
      namespace: [
        'tomb-index'
      ]
    },
    leave(){
      gsap.to(".text-container", { ease: Power1.easeOut, xPercent: -100, opacity: 0.5, duration: .6});
      gsap.to(".tombs-wrapper", { ease: Power1.easeOut, xPercent: 100, opacity: 0.5, duration: .6});

      const done = this.async();
      setTimeout(() => {
        done()
      }, 600);
    },
    beforeEnter(){
      createBookCarousel()
    },
    enter(){
      gsap.fromTo(".text-container", {opacity: 0},{ ease: Power1.easeOut,  opacity: 1, duration: .8});
      gsap.fromTo(".tombs-wrapper", {yPercent: 100},{ yPercent: 0, ease: Power1.easeOut,  opacity: 1, duration: .4});

    }
  },
  {
    name: 't-t-h',
    from: {
      namespace: [
        'tomb-index'
      ]
    },
    to: {
      namespace: [
        'tombs',
        'home'
      ]
    },
    leave(){
      gsap.fromTo(".text-container", {opacity: 1},{ ease: Power1.easeOut,  opacity: 0, duration: .8});
      gsap.fromTo(".tombs-wrapper", {yPercent: 0},{ yPercent: 100, ease: Power1.easeOut,  opacity: 1, duration: .4});
      const done = this.async();
      setTimeout(() => {
        done()
      }, 600);
    },
    beforeEnter(data){
      if(data.next.namespace == "tombs"){
        createCarousel()
      }
    },
    enter(data){
      gsap.fromTo(".text-container", { xPercent: -100}, { ease: Power1.easeOut, xPercent: 0, opacity: 1, duration: .6});
      gsap.fromTo(".tombs-wrapper",  { xPercent: 100}, { ease: Power1.easeOut, xPercent: 0, opacity: 1, duration: .6});
      if(data.next.namespace == "home"){
        gsap.fromTo(".tombs-wrapper",  { xPercent: 100}, { ease: Power1.easeOut, xPercent: 41, opacity: 1, duration: .6});
      }
      else {
        gsap.fromTo(".tombs-wrapper",  { xPercent: 100}, { ease: Power1.easeOut, xPercent: 0, opacity: 1, duration: .6});
      }
      if(data.next.namespace == "tombs"){
        gsap.set(".text-container .text-col:nth-child(2)", { xPercent: -105, opacity: 0});
        gsap.set(".text-container .text-col:nth-child(3)", { xPercent: -210, opacity: 0});
      }
    }
  }]
});

barba.hooks.enter((data) => {
  menu();
});
