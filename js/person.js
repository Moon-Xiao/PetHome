$(function() {
	$("#content-info").hide();
})
$(function back() {
	$("#back").click(function(event) {
		window.location.href = "index.html";
	});
	$("#search").click(function(event) {
		window.location.href = "https://www.baidu.com";
	});
	$("#page").click(function(event) {
		$("#content-page").show();
		$("#content-info").hide();
	});
	$("#info").click(function(event) {
		$("#content-page").hide();
		$("#content-info").show();
	});
});
//getname
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if(c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}
$(function setName() {
	var name = getCookie("name");
	if(name != "") {
		$("#name").html(name);
	} else {
		$("#name").html("Hi,Login please!");
	}

});
//play audio
var song = document.createElement("audio");
song.setAttribute("src", "audio/audio.mp3");
var flag = false;
$(function playAudio() {
	$("#music").click(function() {
		if(flag) {
			$(song).trigger("pause");
			$("#music").removeClass("glyphicon-music");
			$("#music").addClass("glyphicon-pause");
			flag = false;
		} else {
			$(song).trigger("play");
			$("#music").removeClass("glyphicon-pause");
			$("#music").addClass("glyphicon-play");
			flag = true;
		}

	});
});
//good+like
$(function(){
	$("#like").click(function () {
		$("#likenum").html(parseInt($("#likenum").text())+1);
	});
	$("#good").click(function () {
		$("#goodnum").html(parseInt($("#goodnum").text())+1);
	});
});