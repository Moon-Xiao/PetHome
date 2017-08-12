    //mui.init();
    //通过window.screen.width获取屏幕的宽度
    //			var offWidth = window.screen.width / 30; //这里用宽度/30表示1rem取得的px
    //			document.getElrementsByTagName("html")[0].style.fontSize = offWidth + 'px'; //把rrem的值复制给顶级标签html的font-size

    //header text jump
    var ss = [
        [{
            content: "Welcome ",
            color: "white"
        }, {
            content: "To ",
            color: "white"
        }, {
            content: "Best ",
            color: "#F44336"
        }, {
            content: "Pets",
            color: "#F44336"
        }],
        [{
            content: "Pulvinar ",
            color: "#F44336"
        }, {
            content: "Vitae ",
            color: "white"
        }, {
            content: "Site ",
            color: "white"
        }],
        [{
            content: "Curabi ",
            color: "white"
        }, {
            content: "tremlaci ",
            color: "white"
        }, {
            content: "Pharetra ",
            color: "#F44336"
        }]
    ];
    var current = 0;var s_len = 0;var offset = 0;var des = 1;
    for (var i = 0; i < ss[current].length; i++) {s_len += ss[current][i].content.length;}
    window.setInterval(function () {
        var s = ss[current];
        $("#text").empty();
        offset += des;
        var content_offset = 0;
        for (var i = 0; i < s.length; i++) {
            var line = s[i];
            if (line.content.length + content_offset < offset) {
                $("#text").append('<span style="color:' + line.color + '">' + line.content + '</span>');
                content_offset += line.content.length
            } else {
                $("#text").append('<span style="color:' + line.color + '">' + line.content.substr(0, offset - content_offset) + '</span>');
                break;
            }}
        if (offset == s_len) {des = -1;}
        if (offset == 0) {
            des = 1;
            current++;
            current = (current) % ss.length;}
    }, 300);
    window.setInterval(function () {$("#line").toggle();}, 500);
    //header text jump end

    //轮播图
    $(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            slideshow: "true",
            animationSpeed: 500,
            slideshowSpeed: 2000,
            animationLoop: "true",
            direction: "horizontal",
            pauseOnAction: false,
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });
    });
    //轮播图 end

    //Modal
    $(function () {
        $("#storyClick").click(function modalHidden() {
            console.log("do");
            $('#storyModal').modal('hide');
        });
        $("#aboutClick").click(function modalHidden() {
            console.log("do");
            $('#aboutModal').modal('hide');
        });

    })
    //Modal end

    //hi+name
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    $(
            function sayHi() {
                var name = getCookie("name");
                if (name != "") {
                    $("#login").css({
                        border: "none",
                        marginRight: "1.2rem"
                    });
                    $("#login").html("<span style='font-size: 1.8rem;font-style:italic;border-bottom: 1px solid'>Hi," + name + "</span>");
                    $("#login").hover(function setHover() {
//                        console.log("do");
                        $(this).children("span").css({
                            color: "#6495ed"
                        })
                    });
                    $("#login").click(function person() {
                        window.location.href = "person.html";
                    });
                }
            }
    );
    //hi+name end
    //top-btn hidden
    $(function topHidden() {
        $("#top").hide();
    });
    $(window).scroll(function topShow() {
        var toTop = $(document).scrollTop();
        console.log(toTop);
        if (toTop > 200) {
            console.log("do");
            $("#top").show();
        } else {
            $("#top").hide();
        }
    });
    //top-btn hidden end
    //scroll
    //			$(window).scroll(function () {
    ////				console.log($(".header").css("backgroundImage"));
    //				var img=$(".header");
    //				var toTop=$(document).scrollTop();
    //				if(toTop>0){
    //					img.css({
    //						transf
    //					});
    //				}
    ////				var x = 12;
    ////				var y = 0;
    ////				var rand = parseInt(Math.random() * (x - y + 1) + y);
    ////				console.log(toTop);
    //			});



//    $(window).scroll(function () {
//        var toTop = $(document).scrollTop();
//        var height = $(".header-moveImg").height();
//        var offset = toTop/3+height/2;
////        var scaler = ((562/(562 - toTop))/10+9/10)*100;
//        $(".header-moveImg").attr("style","background-position-y:"+(offset)+"px;");
//    })