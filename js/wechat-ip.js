// 微信公众号和 IP 地址显示合并到一个立即执行函数中
(function () {
    console.clear(); // 清除控制台
    // 微信公众号显示
    function weixingongzhonghao() {
        console.log(
            "%c 微信公众号%c https://xm.ee/u/46 ",
            "color: #fff; margin: 1em 0; padding: 5px 0; background: #00CC99;border-radius: 7px 0 0 7px; ",
            "margin: 1em 0; padding: 5px 0; background: #efefef; border-radius: 0 7px 7px 0 ;"
        );
    }

    // 获取 IP 地址和地区信息
    function getIPAndDisplay() {
        // 使用 ip-api.com 获取 IP 地址和地区信息
        fetch('http://ip-api.com/json').then(response => response.json()).then(data => {
            let ip = data.query; // 获取 IP 地址
            // console.log("获取到的 IP 地址:", ip); // 调试输出 IP 地址
            $.ajax({
                type: "get",
                url: "https://api.gumengya.com/Api/UserInfo",
                data: { type: 'json' },
                async: true,
            }).then(err => {
                if (err && err.data) {
                    displayStyledIP(err.data, ip); // 传入有效数据和 IP 地址
                } else {
                    console.error("API 返回的数据无效:", err);
                }
            });
        });
    }

    // 显示 IP 地址信息
    function displayStyledIP(data, ip) {
        if (!data || !data.area) {
            console.error("Invalid data:", data);
            return; // 处理无效数据
        }
        console.log("%c IP地址：%c" + data.area + ' ' + ip, "color: #fff; margin: 1em 0; padding: 5px 0; background: #0099FF;border-radius: 7px 0 0 7px; ", "margin: 1em 0; padding: 5px 0; background: #efefef; border-radius: 0 7px 7px 0 ;");
    }

    // 执行函数
    weixingongzhonghao();
    getIPAndDisplay();
})();

(function () {
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
})();


