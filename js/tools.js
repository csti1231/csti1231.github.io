const cardData = [
    {
        href: "https://css.bqrdh.com",
        image: "https://css.bqrdh.com/images/logo.png",
        title: "CSS可视化",
        desc: "编程",
        category: "dev"
    },
    {
        href: "https://chatgpt.dairoot.cn/",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.81f7067fba5377d70399ef94a999e287?rik=TJXGfvLUdIwiPA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2023%2f02-09%2f135404%2fwater_135404_698_698_.png&ehk=rbgMXQoFbTAhO4VE0MFxk4xw8EkIgKhMJyQCVtPVjnA%3d&risl=&pid=ImgRaw&r=0",
        title: "openai",
        desc: "chatgpt-4 体验版",
        category: "ai"
    },
    {
        href: "https://www.haowallpaper.com/",
        image: "https://www.haowallpaper.com/favicon.ico",
        title: "免费4K壁纸",
        desc: "在线 免费",
        category: "media"
    },
    {
        href: "https://chatgptplus.cn/",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.81f7067fba5377d70399ef94a999e287?rik=TJXGfvLUdIwiPA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2023%2f02-09%2f135404%2fwater_135404_698_698_.png&ehk=rbgMXQoFbTAhO4VE0MFxk4xw8EkIgKhMJyQCVtPVjnA%3d&risl=&pid=ImgRaw&r=0",
        title: "openai",
        desc: "chatgpt-4",
        category: "ai"
    },
    {
        href: "https://www.gaitubao.com/",
        image: "https://www.gaitubao.com/favicon.ico",
        title: "改图包",
        desc: "在线修改图片工具",
        category: "media"

    },
    {
        href: "https://chat.intercat.cn/web/",
        image: "https://huiyu-ai-cdn-oss.intercat.cn/uploads/images/20240707/2024070711305246c6c4976.png",
        title: "汇语AI助手",
        desc: "在线ai",
        category: "ai"
    },
    {
        href: "https://www.58pic.com/",
        image: "https://www.58pic.com/favicon.ico",
        title: "千图网",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://xinghuo.xfyun.cn/desk",
        image: "https://xinghuo.xfyun.cn/favicon.ico",
        title: "讯飞星火",
        desc: "在线",
        category: "ai"
    },
    {
        href: "https://kimi.moonshot.cn/",
        image: "https://cdn.gogoing.work/bookmark/e/0/5/b/kimi.moonshot.cn.png",
        title: "Kimi.ai ",
        desc: "Kimi 是一个有着超大“内存”的智能助手",
        category: "ai"
    },
    {
        href: "https://tongyi.aliyun.com/qianwen/?sessionId=335f2b92c8514e3c9bec794738b0f465",
        image: "https://cdn.gogoing.work/bookmark/b/f/b/f/tongyi.aliyun.com.png",
        title: "通义千问",
        desc: "我是通义千问，一个专门响应人类指令的大模型",
        category: "ai"
    },
    {
        href: "https://www.17sucai.com/",
        image: "https://www.17sucai.com/favicon.ico",
        title: "17素材",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://www.uisdc.com/",
        image: "https://www.uisdc.com/favicon.ico",
        title: "优设",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://uiverse.io/",
        image: "https://uiverse.io/build/_assets/logo-png-XGWSYHKJ.png",
        title: "ui css",
        desc: "源码",
        category: "dev"
    },
    {
        href: "http://www.100sucai.com/",
        image: "http://www.100sucai.com/templates/default/images/logo.png",
        title: "100素材网",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://navnav.co/",
        image: "https://navnav.co/assets/logo-7d2e3e19995a6030c546114a9d5133d0c30ca2c8025e47c40b68d67347dbfa07.png",
        title: "学css",
        desc: "html css js",
        category: "dev"
    },
    {
        href: "https://www.lovejay.top/",
        image: "https://www.lovejay.top/wp-content/uploads/2024/03/%E8%B5%84%E6%BA%90%E5%BA%93logo%E5%B0%8F-1.png",
        title: "jay的资源库",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://33.agilestudio.cn/",
        image: "http://oss.agilestudio.cn/pic/banner_we_media_fse.png",
        title: "33台词",
        desc: "在线 通过台词找影片素材",
        category: "media"
    },
    {
        href: "https://chatglm.cn/",
        image: "https://chatglm.cn/img/logo_test_dark_new_no_neice.67226084.svg",
        title: "智谱清言",
        desc: "在线ai 4.0",
        category: "ai"
    },
    {
        href: "https://chat.intercat.cn/web/",
        image: "https://chat.intercat.cn/static/img/ic_ai.png",
        title: "汇语AI",
        desc: "在线",
        category: "ai"
    },
    {
        href: "https://www.seaart.me/zhCN",
        image: "https://www.seaart.me/_nuxt/img/default-avatar-32.021289a.webp",
        title: "海艺Ai",
        desc: "（绘画）",
        category: "media"
    },
    {
        href: "https://zhiwen.xfyun.cn",
        image: "https://zhiwen.xfyun.cn/static/media/icon2.296d245d8221f07ff15b.png",
        title: "PPT制作",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://chat-ppt.com/",
        image: "https://chat-ppt.com/static/img/white_logo.e230c3d7.svg",
        title: "PPT制作",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://ai.minihuo.com/#/chat/1002",
        image: "https://static.aitutu.cc/res/img/ht3.jpg",
        title: "核桃",
        desc: "在线",
        category: "ai"
    },
    {
        href: "https://chat18.aichatos10.com/#/chat/1732452844851",
        image: "./assets/index/AIchatOS.svg",
        title: "AI Short",
        desc: "在线",
        category: "ai"
    },
    {
        href: "https://hailuoai.com/",
        image: "https://cdn.yingshi-ai.com/prod/user_avatar/1706267364163539669-173194570668965896small.png",
        title: "海螺ai",
        desc: "在线ai 3.5",
        category: "ai"
    },
    {
        href: "https://chat18.aichatos8.com",
        image: "https://t8.baidu.com/it/u=1447957139,1111922189&fm=217&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=A692856A6ED558D6122E4652020040FF&sec=1717866000&t=1133a89fe8414b52ecdfa873c5e28ba1",
        title: "AIchatOS",
        desc: "在线AI 3.5",
        category: "ai"
    },
    {
        href: "https://pic.netbian.com/",
        image: "./assets/index/4k.png",
        title: "4k壁纸",
        desc: "在线",
        category: "media"
    },
    {
        href: "https://www.mxnzp.com/tools/qrcode",
        image: "https://www.mxnzp.com/images/icon/icon_erweima.jpg",
        title: "生成二维码",
        desc: "在线生成二维码",
        category: "dev"
    },
    {
        href: "https://www.cmd5.com/",
        image: "https://www.cmd5.com/images/logo.png",
        title: "解析md5密码",
        desc: "在线解析md5密码",
        category: "dev"
    },
    {
        href: "http://www.tao94.cn/",
        image: "./assets/index/tao94.png",
        title: "全网最良心",
        desc: "免费软件",
        category: "dev"
    },
    {
        href: "https://echarts.apache.org/zh/index.html",
        image: "https://echarts.apache.org/zh/images/logo.png?_v_=20240226",
        title: "echarts图",
        desc: "在线echarts 图",
        category: "media"
    },
    {
        href: "https://www.mxnzp.com/doc/list",
        image: "./assets/index/api.png",
        title: "api接口",
        desc: "在线api接口",
        category: "dev"
    },
    {
        href: "https://cznull.github.io/vsbm",
        image: "./assets/index/phone.png",
        title: "手机测试",
        desc: "在线手机测试",
        category: "dev"
    },
    {
        href: "https://vocalremover.org/zh/",
        image: "./assets/index/voice.png",
        title: "分离人声",
        desc: "在线分离人声",
        category: "media"
    },
    {
        href: "https://www.cz88.net/iplab",
        image: "https://www.cz88.net/assets/img/logo_white.3edc8d05.png",
        title: "ip试验室",
        desc: "在线ip试验室",
        category: "dev"
    },
    {
        href: "https://www.airpano.com/",
        image: "./assets/index/360.png",
        title: "360°看世界",
        desc: "在线 360°看世界",
        category: "media"
    },
    {
        href: "http://chaipip.com/",
        image: "./assets/index/ip.png",
        title: "ip查询",
        desc: "在线ip查询",
        category: "dev"
    },
    {
        href: "https://msdn.sjjzm.com",
        image: "./assets/index/system.png",
        title: "山己几子木",
        desc: "系统",
        category: "system"
    },
    {
        href: "https://msdn.itellyou.cn/",
        image: "https://msdn.itellyou.cn/images/itellyou.cn.png",
        title: "我告诉你",
        desc: "系统",
        category: "system"
    },
    {
        href: "https://www.hellowindows.cn/",
        image: "./assets/index/windows.png",
        title: "你好Windows",
        desc: "系统",
        category: "system"
    },
    {
        href: "https://www.microsoft.com/zh-cn/software-download/windows11",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
        title: "Microsoft",
        desc: "系统",
        category: "system"
    },
    {
        href: "https://www.wepe.com.cn/",
        image: "https://www.wepe.com.cn/images/download/u54.png",
        title: "微PE工具箱",
        desc: "PE工具",
        category: "system"
    },
    {
        href: "https://www.gequbao.com",
        image: "https://www.gequbao.com/static/img/logo.png",
        title: "音乐下载",
        desc: "在线音乐下载",
        category: "media"
    },
    {
        href: "https://www.media.io/zh/audio-cutter.html",
        image: "https://neveragain.allstatics.com/2019/assets/icon/logo/uniconverter-online-zh-header.svg",
        title: "剪音乐",
        desc: "在线剪音乐",
        category: "media"
    },
    {
        href: "https://lightly.teamcode.com/",
        image: "https://lightly.teamcode.com/assets/logo.3daf54a7.svg",
        title: "编译器",
        desc: "在线编译器",
        category: "dev"
    },
    {
        href: "https://zeallr.com/oldfile/zha.php",
        image: "./assets/index/sms.png",
        title: "短信轰炸",
        desc: "在线 短信轰炸",
        category: "dev"
    },
    {
        href: "https://www.toopic.cn/",
        image: "https://www.toopic.cn/templets/images/logo.png",
        title: "壁纸社",
        desc: "4k壁纸",
        category: "media"
    },
    {
        href: "https://zhaoyaojing.wanxiangyuanma.com/",
        image: "./assets/index/mirror.png",
        title: "照妖镜1",
        desc: "网恋抓拍工具",
        category: "dev"
    },
    {
        href: "https://xhnzz.xyz/index/",
        image: "https://xhnzz.xyz/index/favicon.ico",
        title: "照妖镜2",
        desc: "网恋抓拍工具",
        category: "dev"
    },
    {
        href: "https://666.aisipai.cn/ds/?ip=1&jc=110959",
        image: "https://q4.qlogo.cn/headimg_dl?dst_uin=2295541330&spec=100",
        title: "代刷网",
        desc: "在线刷赞",
        category: "dev"
    },
    {
        href: "https://www.haoshudi.com/",
        image: "https://www.haoshudi.com/static/www/image/public/logo.png",
        title: "号属地",
        desc: "在线查询",
        category: "dev"
    },
    {
        href: "https://www.ip138.com/ems/",
        image: "https://cache.ip138.com/site/image/public/logo.png",
        title: "快递查询",
        desc: "在线查询",
        category: "dev"
    },
    {
        href: "https://www.ip138.com/",
        image: "https://cache.ip138.com/static/image/public/logo_index.png",
        title: "IP查询",
        desc: "在线",
        category: "dev"
    },
    {
        href: "https://www.ip.cn/",
        image: "./assets/index/ip.png",
        title: "IP地址查询--手机版",
        desc: "公网ip地址归属地查询",
        category: "dev"
    },
    {
        href: "https://www.ipip.net/",
        image: "./assets/index/ip.png",
        title: "iplark",
        desc: "ip查询",
        category: "dev"
    },
    {
        href: "https://www.cz88.net/",
        image: "https://www.cz88.net/assets/img/logo_white.3edc8d05.png",
        title: "纯真网络",
        desc: "中国历史最悠久的IP地址位置数据库",
        category: "dev"
    },
    {
        href: "https://www.chaipip.com/",
        image: "./assets/index/ip.png",
        title: "高精度IP地址查询",
        desc: "百度高精度IP定位,查IP网免费IP地址查询",
        category: "dev"
    }
    // 最后面的
    ,
    {
        href: "./index.html",
        image: "./assets/public/favicon.gif",
        title: "未完....",
        desc: "敬请期待",
        category: "other"
    }
];

let hoverSound = new Audio('./assets/audio/hover.wav');
let isPlaying = false;

function playHoverSound() {
    if (!isPlaying) {
        hoverSound.currentTime = 0;
        hoverSound.play();
        isPlaying = true;
    }
}

function stopHoverSound() {
    isPlaying = false;
}

function initializeAudio() {
    hoverSound.load();
    hoverSound.volume = 0.5;
}

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map(card => `
        <div class="magical link-card-item" onmouseover="playHoverSound()" onmouseout="stopHoverSound()">
            <a href="${card.href}" target="_blank">
                <img src="${card.image}" alt="">
                <div class="info">
                    <div class="info-title">${card.title}</div>
                    <div class="info-desc">${card.desc}</div>
                </div>
                <div class="icon icon-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                    </svg>
                </div>
            </a>
        </div>
    `).join('');

    initializeAudio();
}

function filterTools(category) {
    return category === 'all'
        ? cardData
        : cardData.filter(tool => tool.category === category);
}

function updateCategoryPills(activeCategory) {
    document.querySelectorAll('.category-pills .pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === activeCategory);
    });
}

function initializeCategories() {
    document.querySelectorAll('.category-pills .pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            updateCategoryPills(category);
            const filteredTools = filterTools(category);
            renderCards(filteredTools, 'cardContainer');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards(cardData, 'cardContainer');
    initializeCategories();
    initializeAudio();
});

document.addEventListener('mousemove', e => {
    document.querySelectorAll(".magical").forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);
    });
});