# Color Plucker App
color picking app

## Using Canvas, JavaScript and JQuery to build a color picker
I wanted to explore the use of Canvas and HTML5 by building a color picker. I first built a basic HTML format that included a container for canvas (and an image) and input to place the color values (RGB and Hex).

## RGB
Using JS & JQuery I built an event listener to pluck the color form the image using the getImageData method on the canvas object based on the location of the cursor on click. Via JQuery I added the value to DOM.

## HEX
I found an explanation and code for converting RGB to HEX at javascripter - http://www.javascripter.net/faq/rgbtohex.htm
This value is also added to the DOM.

## CSS
I recently learned about CuteStrap a scaled down framework between Bootstrap and Normalize. I used CuteStrap for its grid.

I added a color bar that changes color based on the color picked out of the image.

I also added a dropper icon for the cursor on hover over the image.    
