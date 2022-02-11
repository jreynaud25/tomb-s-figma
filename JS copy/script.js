var elem = document.querySelector('.tombs-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  controls: false,
  prevNextButtons: false

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.tombs-carousel', {
  // options
});