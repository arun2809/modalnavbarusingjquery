$(document).ready(()=>
{

$('.p1').hide();
$('.p2').hide();
$('.p3').hide();




$('.b1').click(()=>{

	$('.p1').toggle() && $('.p2').hide() && $('.p3').hide();
	$('.b1').css("color","green") && $('.b2').css("color","") && $('.b3').css("color","");
})

$('.b2').click(()=>{

	$('.p2').toggle() && $('.p1').hide() && $('.p3').hide();
	$('.b2').css("color","green") && $('.b1').css("color","") && $('.b3').css("color","");

})

$('.b3').click(()=>{

	$('.p3').toggle() && $('.p1').hide() && $('.p2').hide();
	$('.b3').css("color","green") && $('.b2').css("color","") && $('.b1').css("color","");
})


})