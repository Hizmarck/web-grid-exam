(function ($) {
	$(function () {
		// menu
		$('.item-menu').on('click', function () {
			alert('Usten seleccionó el menú: ' + $(this).text());
		});

	});
})(window.jQuery);