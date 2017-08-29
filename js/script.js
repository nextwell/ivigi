$(document).ready(function(){
	console.log("script.js loaded");

	/* var rows = 9;
	$('.ta').keyup(function(){
		if ($('.ta').prop('scrollHeight') > $('.ta').prop('clientHeight')){
			rows++;
			 $(this).attr('rows', rows);
		}
	}); */

	$('#enterbut').click(function( e ) {
       
       e.preventDefault(); // отменяем стандартное поведение

       /* код появления
       $("#enterblock").show();
       */
   });

	
	$('.new_ad__file1').click(function(){
        $('.file1').click();
    });
    $('.new_ad__file2').click(function(){
        $('.file2').click();
    });
    $('.new_ad__file3').click(function(){
        $('.file3').click();
    });
    $('.new_ad__file4').click(function(){
        $('.file4').click();
    });
    $('.new_ad__file5').click(function(){
        $('.file5').click();
    });
    $('.new_ad__file6').click(function(){
        $('.file6').click();
    });
    $('.new_ad__file7').click(function(){
        $('.file7').click();
    });
    $('.new_ad__file8').click(function(){
        $('.file8').click();
    });


	
})
	
