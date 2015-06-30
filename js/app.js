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
		// open terms pdf (Sartora job)
	});

	$('.block.manager').click(function(e){
		e.preventDefault()
		$('.block.manager').addClass('chosen-block');
		$('.block.staff').addClass('reject-block')
		
		setTimeout(function(){
			$('.hide-during-signup').fadeOut(500, function(){
				$('.manager-form').fadeIn(300, function(){
					$('html, body').animate({
				        scrollTop: $("#manager-target").offset().top
				    }, 500);
				});
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
				$('.staff-form').fadeIn(300, function(){
					$('html, body').animate({
				        scrollTop: $("#staff-target").offset().top
				    }, 500);
				});
				$('.staff-form').removeClass('form-invisible')
			})
		}, 800)	
	})

	$('.form-back').click(function(e){
		e.preventDefault()
		$('.sign-up-form:visible').fadeOut(300, function(){
			$('.hide-during-signup').fadeIn(500, function(){
				$('.staff-form, .manager-form').addClass('form-invisible')
			})
		});
		$('.chosen-block').removeClass('chosen-block')
		$('.reject-block').removeClass('reject-block')
	})

})

// note to Sartora: call this function on successful form submit
	function formSent(){
		$('.form-step-1').fadeOut(300, function(){
			$('.form-step-2').fadeIn(300);
		});
	}