const canvas = document.getElementById('black-hole');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = 300;
    canvas.height = 300;
}
resize();

const center = { x: canvas.width / 2, y: canvas.height / 2 };
const eventHorizonRadius = 15;
const accretionDiskRadius = 100;

// 创建径向渐变
function createGradient(radius, colors) {
    const gradient = ctx.createRadialGradient(
        center.x, center.y, 0,
        center.x, center.y, radius
    );
    colors.forEach(([stop, color]) => gradient.addColorStop(stop, color));
    return gradient;
}

// 光线扭曲效果
class LightDistortion {
    constructor() {
        this.points = [];
        for (let i = 0; i < 100; i++) {
            this.points.push({
                angle: Math.random() * Math.PI * 2,
                radius: Math.random() * 40 + eventHorizonRadius,
                distortion: Math.random() * 0.5
            });
        }
    }

    draw() {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;

        this.points.forEach(point => {
            const startAngle = point.angle;
            const endAngle = startAngle + Math.PI * point.distortion;

            ctx.beginPath();
            ctx.arc(center.x, center.y, point.radius, startAngle, endAngle);
            ctx.stroke();

            point.angle += 0.0003;
        });
    }
}

// 吸积盘粒子
class AccretionParticle {
    constructor() {
        this.reset();
    }

    reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (accretionDiskRadius - eventHorizonRadius) + eventHorizonRadius + 10;
        this.speed = 0.0008 + (1 - this.radius / accretionDiskRadius) * 0.003;
        this.size = Math.random() * 2 + 1;
        this.brightness = Math.random() * 0.5 + 0.5;
        this.temperature = 1 - (this.radius - eventHorizonRadius) / (accretionDiskRadius - eventHorizonRadius);
        this.trail = [];
    }

    update() {
        this.angle += this.speed * 0.5;
        this.radius -= this.speed * 0.05;

        const x = center.x + Math.cos(this.angle) * this.radius;
        const y = center.y + Math.sin(this.angle) * this.radius;

        this.trail.push({ x, y, brightness: this.brightness });
        if (this.trail.length > 20) this.trail.shift();

        if (this.radius < eventHorizonRadius + 5) {
            this.reset();
        }
    }

    draw() {
        if (this.trail.length < 2) return;

        ctx.beginPath();
        ctx.moveTo(this.trail[0].x, this.trail[0].y);

        for (let i = 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
        }

        const color = this.temperature > 0.7 ?
            `rgba(255,255,255,${this.brightness})` :
            `rgba(255,${100 + this.temperature * 155},${100 + this.temperature * 155},${this.brightness})`;

        ctx.strokeStyle = color;
        ctx.lineWidth = this.size;
        ctx.stroke();
    }
}

// 创建效果实例
const lightDistortion = new LightDistortion();
const particles = Array(150).fill().map(() => new AccretionParticle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制外部光晕
    const outerGlow = createGradient(accretionDiskRadius * 1.2, [
        [0, 'rgba(255,100,100,0.2)'],
        [0.5, 'rgba(255,50,50,0.1)'],
        [1, 'rgba(0,0,0,0)']
    ]);
    ctx.fillStyle = outerGlow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制光线扭曲
    lightDistortion.draw();

    // 绘制吸积盘粒子
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // 绘制事件视界
    const blackHole = createGradient(eventHorizonRadius, [
        [0, 'rgb(0,0,0)'],
        [0.8, 'rgb(0,0,0)'],
        [1, 'rgba(0,0,0,0.95)']
    ]);
    ctx.fillStyle = blackHole;
    ctx.beginPath();
    ctx.arc(center.x, center.y, eventHorizonRadius, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(animate);
}

animate();