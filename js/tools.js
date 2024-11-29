// 工具卡片数据
const toolsData = [
    {
        title: "AI助手",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "网页",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "图像生成",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "资源",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "代码托管",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "应用",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "在线设计",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "企业级",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "笔记工具",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "其他",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "接口测试",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "其他",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "容器平台",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "其他",
        desc: "欢迎来到我的开源博客"
    },
    {
        title: "代码编辑",
        link: "#",
        image: "./assets/work/empty.png",
        tag: "网页",
        desc: "欢迎来到我的开源博客"
    }
];

// 渲染工具卡片
function renderTools() {
    const toolsList = document.getElementById('toolsList');

    toolsData.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'magical item';

        toolCard.innerHTML = `
            <a href="${tool.link}" target="_blank">
                <div class="dark"><img class="cover" src="${tool.image}"></div>
                <div class="text">
                    <div class="title-area">
                        <div class="title">
                            <div class="name">${tool.title}</div>
                            <div class="name link"> ↗</div>
                        </div>
                        <div class="tag tag-${tool.tag === '网页' ? 'web' :
                tool.tag === '资源' ? 'assets' :
                    tool.tag === '应用' ? 'app' :
                        tool.tag === '企业级' ? '2b' :
                            'other'}">${tool.tag}</div>
                    </div>
                    <div class="desc">${tool.desc}</div>
                </div>
            </a>
        `;

        toolsList.appendChild(toolCard);

        // 为卡片添加hover音效
        const hoverSound = new Audio('./assets/audio/hover.wav');
        hoverSound.volume = 0.3;
        toolCard.addEventListener('mouseenter', () => {
            if (!window.audioVisualizer?.isMuted) {
                const sound = hoverSound.cloneNode();
                sound.play();
            }
        });

        // 为标题添加title音效
        const titleSound = new Audio('./assets/audio/title.wav');
        titleSound.volume = 0.5;
        const titleElement = toolCard.querySelector('.name');
        titleElement.addEventListener('mouseenter', (e) => {
            e.stopPropagation(); // 防止触发卡片的hover音效
            if (!window.audioVisualizer?.isMuted) {
                const sound = titleSound.cloneNode();
                sound.play();
            }
        });
    });
}

// 页面加载完成后渲染工具卡片
document.addEventListener('DOMContentLoaded', renderTools); 