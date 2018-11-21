/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
	var seconds = (current.getTime() - date.getTime()) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	var secondsTemp1 = seconds % (3600 * 24);
	var hours = Math.floor(secondsTemp1 / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	var secondsTemp2 = secondsTemp1 % 3600;
	var minutes = Math.floor(secondsTemp2 / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	var secondsTemp3 = Math.round(secondsTemp2 % 60);
	if (secondsTemp3 < 10) {
		secondsTemp3 = "0" + secondsTemp3;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + secondsTemp3 + "</span> 秒"; 
	$("#clock").html(result);
}
