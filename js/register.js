
function backtoPrevious() {
    history.go(-1);
};
$(function back() {
    $("#back").click(function () {
        console.log("do");
        backtoPrevious();
    })
});
window.onload = function down() {
    console.log("do");
    document.getElementById("down").style.transform = "translateY(0)";
    document.getElementById("down").style.webkitTransform = "translateY(0)";
    document.getElementById("down").style.transition = "all 0.5s"
    //check password
};
function checkPws1() {
    var pws = document.getElementById("pws").value;
    var pws1 = document.getElementById("pws1").value;
    if (pws != pws1) {
        document.getElementById("pwsText").innerHTML = "<p style='font-size: 2rem;color: #d95340;font-weight: 400;font-family: 'Lato', sans-serif;'>password doesn't same!</p>";
        return false;
    }
    return true;
}
