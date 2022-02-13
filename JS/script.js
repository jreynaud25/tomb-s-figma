var elem = document.querySelector('.tombs-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  controls: false,
  prevNextButtons: false,
  pageDots: false


});

flkty.on( 'settle', function( index ) {
  console.log('ok')
  var number = document.querySelector('.is-selected').dataset.number
  var name = document.querySelector('.is-selected').dataset.name
  var spans = document.querySelectorAll('.tomb-title-container span');
  spans[0].innerHTML = number
  spans[1].innerHTML = name

});



// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.tombs-carousel', {
  // options
});

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
                                 seconds + 's ' +
                                 milliseconds + 'ms';
}

timer = setInterval(showRemaining, 10);
