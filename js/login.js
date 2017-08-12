
function backtoPrevious() {
    history.go(-1);
};
$(function back() {
   $("#back").click(function () {
       console.log("do");
       backtoPrevious();
   })
});
$(function down() {

//			document.getElementById("down").style.transform="translateY(0)";
//			document.getElementById("down").style.webkitTransform="translateY(0)";
//			document.getElementById("down").style.transition="all 0.5s"
    $("#down").css({
        transform: "translateY(0)",
        webkitTransform: "translateY(0)",
        transition: "all 0.5s"
    });
});
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
function login() {
    if ($("#inputName").val() != "" && $("#inputPassword").val() != "") {
        setCookie("name", $("#inputName").val(), 1)
    }
}
