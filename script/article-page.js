$(document).ready(function() {
	$(".follow").click(function(event) {
		$("#guanzhu").html("我的榜样");
		$(".follow").removeClass("btn-success");
		$(".follow").addClass("btn-primary");
	});

	$(".like").click(function(event) {
		$(".like").css({
			"background-color": "#00CC33",
			"color": "white"
		});
	});
});