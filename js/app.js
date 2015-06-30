// Liquid Rewards landing/entry page

$(document).ready(function(){
	$("input[type=password]").passStrengthify({ 
		element: $('#pw-strength'),
		security: 3
	});
})