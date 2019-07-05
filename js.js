


var menu = document.querySelector('.menu_page');

window.onscroll = function(){
	if(window.pageYOffset > 10){
		menu.style.height = 54 + 'px';
		menu.style.fontSize = 24 + 'px';
	}
	else{
		menu.style.height = 114 + 'px';
		menu.style.fontSize = 40 + 'px';
	}
}



var menuDown = document.querySelector('.menu');
var btnMenu = document.querySelector('.menu_btn');
var hide = true;

btnMenu.onclick = function(){
	menuDown.classList.toggle('move_menu');
	if(hide){
		btnMenu.textContent = 'X';
//		menuDown.style.setAttribute('transform', 'TranslateX(-264px)');
		hide = false;
		return hide;
	}
	else{
		btnMenu.textContent = '|||';
//		menuDown.removeAttribute('transform')
//		menuDown.style.right = 100 +'px';
		hide = true;
		return hide;
		
	}
}





var video = document.querySelector('.video_play');
var btnPlay = document.querySelector('.button_play');
var btnPlayNow = document.querySelector('.play_now');
var is_play = false;

btnPlay.addEventListener('click', playVideo)
btnPlayNow.addEventListener('click', playVideo)
//btnPlayNow.onclick = 
function playVideo(){
	if(!is_play){
		video.play();
		btnPlay.style.display = 'none';
		btnPlayNow.textContent = 'PAUSE';
		is_play = true;
		return is_play;
	}
	else{
		video.pause();
		btnPlay.style.display = 'block';
		btnPlayNow.textContent = 'PLAY NOW';
		is_play = false;
		return is_play;
	}
}






//btnPlay.onclick = function(){
//	if(!is_play){
//		video.play();
//		btnPlay.style.display = 'none';
//		btnPlayNow.textContent = 'PAUSE';
//		is_play = true;
//		return is_play;
//	}
//	else{
//		video.pause();
//		btnPlay.style.display = 'block';
//		btnPlayNow.textContent = 'PLAY NOW';
//		is_play = false;
//		return is_play;
//	}
//}


video.onmouseover = function(){
//	
	if(is_play){
		btnPlay.classList.add('pause');
		btnPlay.textContent = "=";	
//		btnPlay.style.display = 'block';	

	}
	else{
		btnPlay.classList.remove('pause');
		btnPlay.textContent = "";	
		btnPlay.style.display = 'block';	
	}
}

video.onmouseout = function(){
//	btnPlay.style.display = 'none';
}


function Students(num, name, profesion, photoshop, illustrator, sketch, afterEffects){
	this.num = num;
	this.name = name; 
	this.profesion = profesion;
	this.photoshop = photoshop;
	this.illustrator = illustrator;
	this.sketch = sketch;
	this.afterEffects = afterEffects;
};

var Jane = new Students(1, 'Jane Smith', 'designer', 88, 92, 90, 98);
var Bob = new Students(2, 'Bob Keln', 'ingenier', 80, 95, 91, 100);
var Mike = new Students(3, 'Mike Kelvin', 'developer', 99, 90, 97, 90);

var btnSdudent = document.querySelectorAll('.tabs_list');

var inpName = document.querySelector('.form_name');
var inpProfy = document.querySelector('.profy');
var bal = document.querySelectorAll('.bal');
var shkala = document.querySelectorAll('.shkala');

btnSdudent.forEach(function(elem){
//	elem.style.backgroundColor = '#fff';
//	elem.addEventListener('click', showStudent);
	elem.onclick = function(){
//		alert("dfjskj");
		var i = elem.getAttribute('data-student');
		var i = elem.getAttribute('data-student');
		if(i==0){
//			console.log(Jane)
			inpName.innerHTML = Jane.name;
			inpProfy.innerHTML = Jane.profesion;
			bal[0].innerHTML = Jane.photoshop + '%';
			bal[1].innerHTML = Jane.illustrator + '%';
			bal[2].innerHTML = Jane.sketch + '%';
			bal[3].innerHTML = Jane.afterEffects + '%';
			elem.style.backgroundColor = '#' + 957+'e' + 7 + 'd';
			btnSdudent[1].style.backgroundColor = '#fff';
			btnSdudent[2].style.backgroundColor = '#fff';
			shkala[0].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Jane.photoshop + '%, #fbefee ' +0 +')';
			shkala[1].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Jane.illustrator + '%, #fbefee ' +0 +')';
			shkala[2].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Jane.sketch + '%, #fbefee ' +0 +')';
			shkala[3].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Jane.afterEffects + '%, #fbefee ' +0 +')';

	
		}
		if(i==1){	
			inpProfy.innerHTML = Bob.profesion;
			inpName.innerHTML = Bob.name;
			bal[0].innerHTML = Bob.photoshop + '%';
			bal[1].innerHTML = Bob.illustrator + '%';
			bal[2].innerHTML = Bob.sketch + '%';
			bal[3].innerHTML = Bob.afterEffects + '%';

			elem.style.backgroundColor = '#' + 957+'e' + 7 + 'd';
			btnSdudent[0].style.backgroundColor = '#fff';
			btnSdudent[2].style.backgroundColor = '#fff';

			shkala[0].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Bob.photoshop + '%, #fbefee ' +0 +')';
			shkala[1].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Bob.illustrator + '%, #fbefee ' +0 +')';
			shkala[2].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Bob.sketch + '%, #fbefee ' +0 +')';
			shkala[3].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Bob.afterEffects + '%, #fbefee ' +0 +')';

			
//			console.log(Bob)
		}
		if(i==2){
			inpProfy.innerHTML = Mike.profesion;
			inpName.innerHTML = Mike.name;
			bal[0].innerHTML = Mike.photoshop + '%';
			bal[1].innerHTML = Mike.illustrator + '%';
			bal[2].innerHTML = Mike.sketch + '%';
			bal[3].innerHTML = Mike.afterEffects + '%';

			elem.style.backgroundColor = '#' + 957+'e' + 7 + 'd';
			btnSdudent[0].style.backgroundColor = '#fff';
			btnSdudent[1].style.backgroundColor = '#fff';

			shkala[0].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Mike.photoshop + '%, #fbefee ' +0 +')';
			shkala[1].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Mike.illustrator + '%, #fbefee ' +0 +')';
			shkala[2].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Mike.sketch + '%, #fbefee ' +0 +')';
			shkala[3].style.background = 'linear-gradient(to right, #e' + 64 + 'e' + 40 + ' ' + Mike.afterEffects + '%, #fbefee ' +0 +')';
			
//			console.log(Mike)
		}
	}
})

var btnlike = document.querySelectorAll('.btnlike');
var liked = [];
liked.length=btnlike.length;
for(var i=0; i<liked.length; i++){
	liked[i]=0;
}
likecnt = document.querySelectorAll('.likecnt')

btnlike.forEach(function(elem) {
		elem.onclick = function(){

		var i = elem.getAttribute('data-like');
		var likecntValue = parseInt(likecnt[i].innerHTML);	
			
			if(liked[i]==0){

				btnlike[i].innerHTML = '<i class="fas fa-thumbs-up"></i>';
				likecnt[i].innerHTML = likecntValue+1;
				
			   liked[i] = 1;
				return liked[i];	   
			   }
			   else{
			   btnlike[i].innerHTML = '<i class="far fa-thumbs-up"></i>'
			   liked[i] = 0;
				likecnt[i].innerHTML = likecntValue-1;
				
				   return liked[i];
			   }

		}			
						}) 
//		var i = elem.getAttribute('data-like');
//	console.log(i);
//	if(liked[i] == 0){
//	  	btnlike[i].innerHTML = '<i class="fas fa-thumbs-up"></i>'
//		liked[i] = 1;
//		return liked;
//	}
//	else{
//		btnlike[i].innerHTML = '<i class="far fa-thumbs-up"></i>'
//		liked[i] = 0;
//		return liked;
//	}
//}

var choseBlock = document.querySelectorAll('.chose_block');
var ulChose = document.querySelector('.ul_chose');
var clas = document.querySelectorAll('.clas');
var mg_clas = document.querySelector('.mg_clas');
var btnPurchase = document.querySelectorAll('#purchase');

btnPurchase.forEach(function(elem){
	elem.onclick = function(){
		var i = elem.getAttribute('data-tab');
		for(var j =0; j < choseBlock.length; j++){
			var i=elem.getAttribute('data-tab');
//			console.log(clas[j].innerHTML);
			if(i==j){
//				choseBlock[j].classList.toggle('orange');
//			alert(clas[j].innerHTML);
			mg_clas.innerHTML = clas[i].innerHTML;	
			}
			else{
//				choseBlock[j].classList.remove('orange');
			}

		}
	}
})



$('.popup-content').magnificPopup({
 type: 'inline'
 });
	

var map  = document.querySelector('.map');
var map_show  = document.querySelector('iframe');
map.addEventListener('click', showMap);

function showMap(){
	map_show.classList.toggle('show');
	map.classList.toggle('rotate');
}
