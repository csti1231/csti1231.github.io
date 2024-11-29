// 将特定日期的灰度效果和微信公众号显示合并到一个立即执行函数中
(function () {
    // 微信公众号显示函数
    function weixingongzhonghao() {
        console.log(
            "%c 微信公众号%c https://xm.ee/u/46 ",
            "color: #fff; margin: 1em 0; padding: 5px 0; background: #00CC99;border-radius: 7px 0 0 7px; ",
            "margin: 1em 0; padding: 5px 0; background: #efefef; border-radius: 0 7px 7px 0 ;"
        );
    }

    // 初始执行
    weixingongzhonghao();

    // 设置定时器只对微信公众号显示
    setInterval(weixingongzhonghao, 5000);
})();



$(function () {
    // 将 API 更改为 ipinfo.io
    fetch('https://ipinfo.io/json').then(response => response.json()).then(data => {
        let ip = data.ip;
        $.ajax({
            type: "get",
            url: "https://api.gumengya.com/Api/UserInfo",
            data: { type: 'json' },
            async: true,
        }).then(err => {
            function displayStyledIP() {
                console.log("%c IP地址：%c" + err.data.area + ' ' + ip, "color: #fff; margin: 1em 0; padding: 5px 0; background: #0099FF;border-radius: 7px 0 0 7px; ", "margin: 1em 0; padding: 5px 0; background: #efefef; border-radius: 0 7px 7px 0 ;");
            }
            displayStyledIP();
            setInterval(displayStyledIP, 5000);
        })


    });
});
((
    function () {
        var OriginTitle = document.title;
        var titleTime;
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
                clearTimeout(titleTime);
            }
            else {
                document.title = '♪(^∇^*)欢迎回来！' + OriginTitle;
                titleTime = setTimeout(function () {
                    document.title = OriginTitle;
                }, 2000);
            }
        });
    }
))
