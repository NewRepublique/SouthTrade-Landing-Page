// Liquid Rewards landing/entry page

$(document).ready(function(){
	$(".manager-password").passStrengthify({ 
		element: $('#pw-strength-manager'),
		security: 3
	});
	$(".staff-password").passStrengthify({ 
		element: $('#pw-strength-staff'),
		security: 3
	});

	// control visibility of capacity dropdown
	$('#onPremise').click(function(){
		$('#capacity').show()
	});
	$('#offPremise').click(function(){
		$('#capacity').hide()
	});

	// terms and conditions link 
	$('.terms').click(function(e){
		e.preventDefault()
		// open terms modal
	});

	$('.block.manager').click(function(e){
		e.preventDefault()
		$('.block.manager').addClass('chosen-block');
		$('.block.staff').addClass('reject-block')
		
		setTimeout(function(){
			$('.hide-during-signup').fadeOut(500, function(){
				$('.manager-form').fadeIn(300);
				$('.manager-form').removeClass('form-invisible')
			})
		}, 800)	
	})

	$('.block.staff').click(function(e){
		e.preventDefault()
		$('.block.staff').addClass('chosen-block');
		$('.block.manager').addClass('reject-block')
		
		setTimeout(function(){
			$('.hide-during-signup').fadeOut(500, function(){
				$('.staff-form').fadeIn(300);
				$('.staff-form').removeClass('form-invisible')
			})
		}, 800)	
	})

	
})