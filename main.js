var a = document.querySelector('#a');

a.innerHTML = 'Welcome to the XO game';
a.style.height = '50px';
a.style.lineHeight = '50px';

var b = document.querySelectorAll('.box');


var counter =0;
var sign;

function putSign(e) {
  if (e.target.innerHTML == "") {
     sign = (counter % 2 == 0) ? "X" : "O";
     counter++;
	 e.target.innerHTML = sign;
  }
  checkIfWon(sign);
}

function checkIfWon(sign) {
    
   if ( (b[0].innerHTML == b[1].innerHTML && b[0].innerHTML == b[2].innerHTML && b[0].innerHTML == sign ) ||
        (b[3].innerHTML == b[4].innerHTML && b[3].innerHTML == b[5].innerHTML && b[3].innerHTML == sign) ||
		(b[6].innerHTML == b[7].innerHTML && b[6].innerHTML == b[8].innerHTML && b[6].innerHTML == sign) ||
		(b[0].innerHTML == b[3].innerHTML && b[3].innerHTML == b[6].innerHTML && b[3].innerHTML == sign) ||
		(b[1].innerHTML == b[4].innerHTML && b[1].innerHTML == b[7].innerHTML && b[1].innerHTML == sign) ||
		(b[2].innerHTML == b[5].innerHTML && b[2].innerHTML == b[8].innerHTML && b[2].innerHTML == sign) ||
		(b[0].innerHTML == b[4].innerHTML && b[0].innerHTML == b[8].innerHTML && b[0].innerHTML == sign) ||
		(b[2].innerHTML == b[4].innerHTML && b[2].innerHTML == b[6].innerHTML && b[2].innerHTML == sign) ) {
           alert(sign + " won!!!");	
        } else {
		   if (counter == 9) {
		      alert("no one won!!!");	
		   }
		   
		}
        console.log("sign is " ,sign, b[0].innerHTML, b[1].innerHTML, b[2].innerHTML);		
}       



var c = document.querySelector('#b');
c.addEventListener('click', putSign);


