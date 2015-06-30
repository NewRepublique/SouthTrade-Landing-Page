// Liquid Rewards landing/entry page

$(document).ready(function(){
	$("input[type=password]").passStrengthify({ 
		element: $('#pw-strength'),
		security: 3
	});

	$('#onPremise').click(function(){
		$('#capacity').show()
	})
	$('#offPremise').click(function(){
		$('#capacity').hide()
	})
})