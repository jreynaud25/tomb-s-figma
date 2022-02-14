
var end = new Date('18 Feb 2022 15:00:00');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour *24;
var timer;

function showRemaining()
{
    var now = new Date();
    var distance = end - now;
    if (distance < 0 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( (distance % _day ) / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;

    var countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = days  + 'd ' +
                                 hours + 'h ' +
                                 minutes + 'm ' +
                                 seconds + 's '}

timer = setInterval(showRemaining, 10);

function createCarousel(){
var elem = document.querySelectorAll('.tombs-carousel')[0];

var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  controls: false,
  prevNextButtons: false,
  pageDots: false


});

var next = document.querySelector('.tombs-nav .next')
next.addEventListener('click',function(){
  flkty.next();
  var actualPos = flkty.selectedIndex + 1; 
  var number = document.querySelectorAll('.cell')[actualPos].dataset.number
  var name = document.querySelectorAll('.cell')[actualPos].dataset.name
  var house = document.querySelectorAll('.cell')[actualPos].dataset.house
  var spans = document.querySelectorAll('.tomb-title-container span');
  spans[0].innerHTML = number
  spans[1].innerHTML = name
  spans[3].innerHTML = house
})

var prev = document.querySelector('.tombs-nav .previous')
prev.addEventListener('click',function(){
  flkty.previous();
  var actualPos = flkty.selectedIndex; 

  var number = document.querySelectorAll('.cell')[actualPos].dataset.number
  var name = document.querySelectorAll('.cell')[actualPos].dataset.name
  var house = document.querySelectorAll('.cell')[actualPos].dataset.house
  var spans = document.querySelectorAll('.tomb-title-container span');
  spans[0].innerHTML = number
  spans[1].innerHTML = name
  spans[3].innerHTML = house
})

}
createCarousel()

function createBookCarousel(){
  var elem = document.querySelector('.book');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    controls: false,
    prevNextButtons: false,
    pageDots: false
  
  
  });
  
  var next = document.querySelector('.book-nav .next')

  next.addEventListener('click',function(){
  flkty.next();
})

var prev = document.querySelector('.book-nav .previous')

prev.addEventListener('click',function(){
  flkty.previous();
})

  }
  createBookCarousel()



// alert('ok')

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.tombs-carousel', {
//   // options
// });
function menu(){
var navs = document.querySelectorAll('.navigation nav');
navs.forEach(nav => {
  nav.addEventListener('click',function(){
    console.log('ok')
    navs.forEach(nav => {
      nav.querySelector('a').classList.remove('active')
    });
    this.querySelector('a').classList.add('active')
  })
  
});
}
menu();

