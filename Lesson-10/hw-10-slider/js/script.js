$(function(){
	let galery = $('.gallery-1');
	let images = galery.find('.photos img');
	let i = 0;
	galery.find('.buttons .prev').on('click', function(){
		$(images[i]).removeClass('showed');
		i--;
		if(i < 0){
			i = images.length - 1;
		}
		$(images[i]).addClass('showed');
	});

	galery.find('.buttons .next').on('click', function(){
		$(images[i]).removeClass('showed');
		i++;
		if(i >= images.length){
			i = 0;
		}
		$(images[i]).addClass('showed');
	});
});
