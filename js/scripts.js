//window.onload = function(){

	var inp_email = document.querySelector('input[name=email]')
//	var inp_phone = document.querySelector('input[name=phone]')
	var inp_name = document.querySelector('input[name=name]')


	var sendBtn = document.querySelector('.send_mes');

	sendBtn.addEventListener('click' , function(){
		var params = 'email= ' + inp_email.value +'&'+'name=' + inp_name.value;
		ajaxPost(params)
	}) 

	function ajaxPost(params){
		var request = new XMLHttpRequest();

		request.onreadystatechange = function(){
			console.log(request.readyState)
			if(request.readyState == 4 && request.status == 200){
				if(request.responseText == '1'){
					document.querySelector('.out').innerHTML = 'get Work';	
					document.querySelector('.form_post').style.display = 'none';
				}
				else{
					document.querySelector('.out').innerHTML = request.responseText;	
				}
				

			}
		}

		request.open('POST' , 'js/app.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.send(params);
	}
//}










//request.readyState 0 - new
//request.readyState 1 - open
//request.readyState 2 - send
//request.readyState 3 - ответ пришел частично
//request.readyState 4 - ответ пришел полностью