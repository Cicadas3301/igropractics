$(document).ready(function() {
	
	$('.btn_search').click(function() {
		$('.input').toggleClass('active');
	});
	$('.big_slider .slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('a[data-fancybox=""').on('click', function () {
		$.fancybox.close();
	})

	$('.calendar_item-carousel').slick({
		dots: false,
		nav: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		nextArrow: '<img class="slick-arrow slick-next" src="./images/calendararrow.png">',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
			  }
			}
		  ]
	});

	$('.big_video_play').click(function() {
		$('.big_video_play').toggleClass('in_active');
		$('.big_video_img').toggleClass('in_active');
	});

	if (window.matchMedia("(max-width: 991.90px)").matches) {
		$('.header_location, .header_socials, .header_button, .header_nav').appendTo('.header_mob');
		$('.games_top-select, .games_top-button').appendTo('.games_top-mob');
		$('.calendar_menu-item, .calendar_wrap, .calendar_menu-button').appendTo('.calendar_menu-mob')
		$('.gamer_top-socials--inner').appendTo('.gamer_top-games')
	}

	$('.header_burger').on('click', function () {
		$(this).toggleClass('active');
		$('.header_mob').toggleClass('active');
		$('body').toggleClass('ov-hidden');
	});

	$('.games_top-input').click(function (e) {
		e.preventDefault();
		$(this).parent().find('.games_top-toggle').stop().slideToggle();
		$(this).toggleClass('active');
	});

	$('.games_top-close, .games_top-filter').on('click', function () {
		$('.games_top-mob').toggleClass('active');
		$('body').toggleClass('ov-hidden');
	})		

	$('.games_top-toggle > span').on('click', function () {
		var inptText = $(this).html();
		$(this).parent().parent('.games_top-select').find('.games_top-input > span').html();
		$(this).parent().parent('.games_top-select').find('.games_top-input > span').html(inptText);
		$(this).parent().parent('.games_top-select').find('.games_top-input').removeClass('active');
		$(this).parent('.games_top-toggle').slideUp();
	});

	$('.calendar_menu-filter, .calendar_menu-close').on('click', function () {
		$('.calendar_menu-mob').toggleClass('active');
		$('body').toggleClass('ov-hidden');
	})

	$('.calendar_menu-top').on('click', function () {
		$(this).siblings('.calendar_menu-inputs').slideToggle();
		$(this).toggleClass('active');
	})

	$('.js-emailbutton').on('click', function () {
		event.preventDefault();
		$('.js-reposttoggle').removeClass('active');
		$('.js-emailtoggle').toggleClass('active');
	})
	$('.js-repostbutton').on('click', function () {
		event.preventDefault();
		$('.js-emailtoggle').removeClass('active');
		$('.js-reposttoggle').toggleClass('active');
	});

	$('.msk_games .links a').on('click', function () {
		event.preventDefault();
		$('.msk_games .links a').removeClass('active');
		$(this).addClass('active');
	})
	$('.registration .links a').on('click', function () {
		event.preventDefault();
		$('.registration .links a').removeClass('active');
		$(this).addClass('active');
	})

	var telInp = $('input[type="tel"]');

	telInp.each(function () {
		$(this).mask("+7(999) 999-9999");
	});

	$('#datepicker').datepicker({
		inline: true,
		closeText: 'Закрыть',
		prevText: 'Предыдущий',
		nextText: 'Следующий',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	});

	$('.select2-search__field').attr('placeholder', 'Поиск');

	$('.games_top-select select').select2();

});