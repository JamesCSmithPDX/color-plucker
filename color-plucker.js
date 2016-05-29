//get canvas
var canvas =  document.getElementById('color-plucker').getContext('2d');

//add image to page in canvas
var img = new Image();
img.src = 'image.jpg';
$(img).load(function(){
  canvas.drawImage(img, 0, 0);
});

// thanks javascripter http://www.javascripter.net/faq/rgbtohex.htm
function rgbToHex(R,G,B) {
  return toHex(R)+toHex(G)+toHex(B);
};

function toHex(n) {
  n = parseInt(n);
  if (isNaN(n)) return '00';
  n = Math.max(0,Math.min(n,255));
  return '0123456789ABCDEF'.charAt((n-n%16)/16) + '0123456789ABCDEF'.charAt(n%16);
};

//set up click event to get canvas form page location less canvas offsets
$('#color-plucker').click(function(event){
  var x = event.pageX - this.offsetLeft;
  var y = event.pageY - this.offsetTop;

// get the RGB value of location of click event from canvas object
  var imgData = canvas.getImageData(x, y, 1, 1 ).data;

  var R = imgData[0];
  var G = imgData[1];
  var B = imgData[2];

  var rgb = R + ', ' + G + ', ' + B;
  $('#rgb input').val(rgb);

//convert RGB to HEX
  var hex = rgbToHex(R,G,B);
  var hexColor = '#' + hex;
//add hex to page
  $('#hex input').val(hexColor);
  $('.color').css('background-color', hexColor);
});
