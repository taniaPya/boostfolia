var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var block = document.querySelectorAll('.slid_item');

//block[0].style.left = (document.body.offsetWidth - block[0].offsetWidth ) / 2  + 'px';
//
//console.log(document.body.offsetWidth) 
//console.log(block[0].offsetWidth)
//	

var cntLeft = 0;

prev.setAttribute('disabled','disabled');
prev.style.display = 'none';
//beg.setAttribute('disabled','disabled');


next.onclick = function(){
//	setTimeout(function(){
		//	block[cntLeft+1].style.display = 'flex';

//	}, 1000)
	
	
	
	block[cntLeft].style.transform = 'translateX(' +  -2000 + 'px)';
	block[cntLeft+1].style.transform = 'translateX(' +  0 + 'px)';
//	console.log(block[cntLeft+1].style.left)
	block[cntLeft+1].style.left = (document.body.offsetWidth - block[cntLeft+1].offsetWidth ) / 2  + 'px';
	
	cntLeft++;
	
	prev.style.display = 'block';
	prev.removeAttribute('disabled'); 	
//	beg.removeAttribute('disabled'); 	

	
	
	if (cntLeft == block.length-1){
		next.setAttribute('disabled','disabled');
		next.style.display = 'none';
//		end.setAttribute('disabled','disabled');
		} 
	return cntLeft;
}


prev.onclick = function(){

//			block[cntLeft-1].style.display = 'flex';

	
	block[cntLeft].style.transform = 'translateX(' +  2000 + 'px)';
	block[cntLeft-1].style.transform = 'translateX(' +  0 + 'px)';
	block[cntLeft-1].style.left =  0 ;
	block[cntLeft-1].style.left = (document.body.offsetWidth - block[cntLeft-1].offsetWidth ) / 2  + 'px';
	block[cntLeft].style.display = 'none';
	cntLeft--;
	
	next.removeAttribute('disabled'); 
	next.style.display = 'block';

	
	
	if (cntLeft == 0){
		prev.setAttribute('disabled','disabled');
		prev.style.display = 'none';

		} 
	return cntLeft;
}


