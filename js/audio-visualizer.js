class AudioVisualizer {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 60;
        this.canvas.height = 30;
        this.canvas.style.cssText = `
            position: fixed;
            right: 20px;
            bottom: 20px;
            z-index: 1000;
            border-radius: 20px;
            background: rgba(0, 0, 0, 0.2);
            cursor: pointer;
        `;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 64;
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

        this.bgAudio = new Audio();
        this.bgAudio.src = './assets/audio/bg.wav';
        this.bgAudio.loop = true;
        this.hoverAudio = new Audio();
        this.hoverAudio.src = './assets/audio/hover.wav';
        this.titleAudio = new Audio();
        this.titleAudio.src = './assets/audio/title.wav';

        this.bgAudio.addEventListener('canplaythrough', () => {
            this.bgSource = this.audioContext.createMediaElementSource(this.bgAudio);
            this.bgSource.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
            this.autoPlay();
        });

        this.isPlaying = true;
        this.isMuted = false;
        this.setupHoverSound();
        this.setupToggle();
        this.animate();
    }

    autoPlay() {
        this.audioContext.resume().then(() => {
            this.bgAudio.play().catch(err => {
                console.log('Auto-play prevented:', err);
                document.addEventListener('click', () => {
                    this.bgAudio.play();
                }, { once: true });
            });
        });
    }

    setupToggle() {
        this.canvas.addEventListener('click', () => {
            if (this.isPlaying) {
                this.bgAudio.pause();
                this.isPlaying = false;
                this.isMuted = true;
            } else {
                this.bgAudio.play();
                this.isPlaying = true;
                this.isMuted = false;
            }
        });
    }

    setupHoverSound() {
        const interactiveElements = document.querySelectorAll(`
            .magical.btn,
            .magical.link-card-item,
            .magical.power-card,
            .magical.power-card-number,
            .magical.resume-btn,
            .link-card-item a,
            .info-title a,
            .friends a,
            .fillings a,
            .title-name,
            a,
            li,
            .icon,
            .btn,
            .link-card-item,
            .power-card,
            .power-card-number,
            .resume-btn,
            [onclick],
            [href],
            .magical
        `);

        interactiveElements.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (!this.isMuted) {
                    const hoverSound = this.hoverAudio.cloneNode();
                    hoverSound.volume = 0.3;
                    hoverSound.play();
                }
            });
        });

        const titleElements = document.querySelectorAll(`.title-name, .title-hi,.logo`);
        titleElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                if (!this.isMuted) {
                    const titleSound = this.titleAudio.cloneNode();
                    titleSound.volume = 0.5;
                    titleSound.play();
                }
            });
        });
    }

    draw() {
        this.analyser.getByteFrequencyData(this.dataArray);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        this.ctx.font = '10px Arial';
        this.ctx.fillText(this.isPlaying ? 'ON' : 'OFF', 8, 19);

        const centerX = 45;
        const centerY = 15;
        const radius = 5;

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.isPlaying ?
            'rgba(0, 150, 255, 0.5)' :
            'rgba(150, 150, 150, 0.5)';
        this.ctx.fill();

        if (this.isPlaying) {
            const maxWaves = 3;
            const average = Array.from(this.dataArray).reduce((a, b) => a + b, 0) / this.dataArray.length;
            const intensity = average / 256;

            for (let i = maxWaves; i > 0; i--) {
                const waveRadius = radius + (i * 3 * intensity);
                const alpha = (maxWaves - i + 1) * 0.2 * intensity;

                this.ctx.beginPath();
                this.ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
                this.ctx.strokeStyle = `rgba(0, 150, 255, ${alpha})`;
                this.ctx.stroke();
            }
        }
    }

    animate = () => {
        this.draw();
        requestAnimationFrame(this.animate);
    }
}

const audioVisualizer = new AudioVisualizer(); 