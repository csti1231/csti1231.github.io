// 时间脚本
function showTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    document.getElementById("time-container-time").innerHTML = now.toLocaleString('zh-CN', options).replace(/\//g, '-');
}
showTime()
setInterval(showTime, 1000);