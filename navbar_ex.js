$(document).ready(()=>{



	$(window).resize(()=> {

  if ($(this).width() <= 908) {

    $('.item').hide();

  } else {

    $('.item').show();

    }

});


	$('.menu').click(()=>
	{
		$('.item').toggle();
	})









})