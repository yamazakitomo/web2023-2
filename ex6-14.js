var image=Twitter();
image[0]=new Image();
image[0].src="img/bluebird_baka.png";
image[1]=new Image();
image[1].src="img/bird_aoitori_bluebird.png";
var cnt=0;
function max11(){if(document.getElementById){document.timer14.elements[0].disabled=true;document.getElementById("logo3").src = image[cnt].src;cnt++;if( cnt <= 1 ){ var timer1=setTimeout("max11()",3000)}else{cnt=0;document.slide.elements[0].disabled=false;clearTimeout(timer1);}}}

