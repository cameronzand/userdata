import $ from 'jquery';

console.log("loaded");
var form = $(".form");

var info = $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: addForm
});

function addForm (data){
	for (var i = 0; i < data.results.length; i++){
		var result = data.results[i];
		var formHTML = formTemplate(result);
		form.append(formHTML);
	}
}



function formTemplate (array) {

	
		
		var  HTML = `

		<div class="box">


		<img src="${array.picture.large}" class="picture">
		<div class="name center"><span>${array.name.first} ${array.name.last}</span></div>
		<div class="email">${array.email}</div>
	
		<div class="street center">${array.location.street}</div>
		<div class="city">${array.location.city}, ${array.location.state}, ${array.location.postcode}</div>

		<div class="phone center">${array.phone}</div>


		<div class="cell blur">${array.cell}</div>
		</div>
		`;
	
		return HTML;
	} 
 


