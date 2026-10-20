document.addEventListener('DOMContentLoaded', () => {
    const logContainer = document.getElementById('log-container');
    const runBtn = document.getElementById('run-btn');
    const bg = document.getElementById('main-scene');
    const music = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const logWindow = document.getElementById('log-window');
    const wishCard = document.getElementById('wish-card');
    const replayBtn = document.getElementById('replay-btn');

    // Music Player Control
    let isPlayingMusic = false;

    function playAudio() {
        if (!music) return;
        music.play().then(() => {
            isPlayingMusic = true;
            musicToggle.classList.add('playing');
        }).catch(err => {
            console.log("Audio autoplay prevented, awaiting user interaction:", err);
        });
    }

    function pauseAudio() {
        if (!music) return;
        music.pause();
        isPlayingMusic = false;
        musicToggle.classList.remove('playing');
    }

    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (music.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    });

    // Create Floating Flower Petals and Hearts
    const petalIcons = ['🌸', '🌷', '🌺', '✨', '💖', '💐', '💕'];
    const petalCount = 24;

    for (let i = 0; i < petalCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = petalIcons[Math.floor(Math.random() * petalIcons.length)];
        const size = Math.floor(Math.random() * 14) + 16; // 16px - 30px
        
        Object.assign(flower.style, {
            left: Math.random() * 98 + 'vw',
            fontSize: size + 'px',
            animationDuration: (Math.random() * 4 + 6) + 's',
            animationDelay: (Math.random() * 8) + 's',
            opacity: Math.random() * 0.4 + 0.6
        });
        document.body.appendChild(flower);
    }

    // Interactive Heart Spawner on Screen Click
    const clickEmojis = ['💖', '🌸', '✨', '💕', '🌷', '🤍'];
    document.addEventListener('click', (e) => {
        // Don't spawn if clicking button directly
        if (e.target.closest('button') || e.target.closest('.music-widget')) return;

        const heart = document.createElement('div');
        heart.className = 'click-heart';
        heart.innerHTML = clickEmojis[Math.floor(Math.random() * clickEmojis.length)];
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    });

    // Meaningful logs for Vietnamese Women's Day (20/10)
    const logs = [
        {
            tag: '[SCAN_BEAUTY]',
            tagClass: 'tag-beauty',
            pid: '20.10.BEAUTY',
            content: 'Quét toàn bộ không gian ngày 20/10... Phát hiện: <span class="highlight-pink">100% Nhan Sắc Rạng Ngời</span> & nụ cười tỏa nắng của người phụ nữ Việt Nam tuyệt vời nhất!'
        },
        {
            tag: '[ALLOC_JOY]',
            tagClass: 'tag-joy',
            pid: '20.10.JOY',
            content: 'Cấp phát tài nguyên: <span class="highlight-rose">VÔ HẠN (UNLIMITED) Hạnh Phúc</span>, RAM bình yên đạt 100%, tự động dọn dẹp sạch mọi âu lo và áp lực thường nhật.'
        },
        {
            tag: '[UPGRADE_GRACE]',
            tagClass: 'tag-grace',
            pid: '20.10.GRACE',
            content: 'Cập nhật chuẩn nét đẹp người phụ nữ Việt: <span class="highlight-bold">Vừa dịu dàng đằm thắm, vừa kiên cường bản lĩnh và trí tuệ</span>. Luôn tự tin tỏa sáng theo cách của riêng mình!'
        },
        {
            tag: '[FIREWALL_SHIELD]',
            tagClass: 'tag-protect',
            pid: '20.10.PROTECT',
            content: 'Kích hoạt tường lửa bảo vệ nụ cười: <span class="highlight-pink">MIỄN NHIỄM</span> với muộn phiền. Chỉ cho phép niềm vui, may mắn, sức khỏe và sự yêu thương đi qua.'
        },
        {
            tag: '[BLOOM_FOREVER]',
            tagClass: 'tag-bloom',
            pid: '20.10.BLOOM',
            content: 'Thiết lập trạng thái vĩnh cửu: <span class="highlight-rose">Mãi tươi trẻ, rạng rỡ và tràn đầy sức sống</span> như những đóa hoa ngát hương giữa trời thu.'
        },
        {
            tag: '[LOVE_TRANSMIT]',
            tagClass: 'tag-love',
            pid: '20.10.LOVE',
            content: '<span class="highlight-bold">Chúc mừng ngày Phụ nữ Việt Nam 20/10!</span> Chúc bạn luôn <span class="highlight-pink">XINH ĐẸP</span>, <span class="highlight-rose">HẠNH PHÚC</span> và <span class="highlight-gold">ĐƯỢC YÊU THƯƠNG TRỌN VẸN MỖI NGÀY</span>! 💖'
        }
    ];

    let isFinished = false;

    // Confetti / Flower burst generator
    function triggerCelebration() {
        const burstCount = 40;
        const colors = ['#ff4081', '#ff758c', '#ff85a2', '#ffccd5', '#ffd700', '#fff'];

        for (let i = 0; i < burstCount; i++) {
            const piece = document.createElement('div');
            piece.style.position = 'fixed';
            piece.style.top = '50%';
            piece.style.left = '50%';
            piece.style.width = (Math.random() * 10 + 6) + 'px';
            piece.style.height = (Math.random() * 10 + 6) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.zIndex = '999';
            piece.style.pointerEvents = 'none';

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 300 + 100;
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance - 80;

            piece.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${destX}px, ${destY}px) rotate(${Math.random() * 720}deg) scale(0.4)`, opacity: 0 }
            ], {
                duration: Math.random() * 1200 + 1000,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                fill: 'forwards'
            });

            document.body.appendChild(piece);
            setTimeout(() => piece.remove(), 2500);
        }
    }

    // Action button click handler
    runBtn.addEventListener('click', () => {
        // Start playing music
        if (music && music.paused) {
            playAudio();
        }

        // If completed, open the final celebratory wish card
        if (isFinished) {
            logWindow.classList.add('fade-out');
            wishCard.classList.add('show');
            runBtn.style.display = 'none';
            triggerCelebration();
            return;
        }

        // Start processing logs
        runBtn.disabled = true;
        runBtn.innerHTML = '<span class="btn-icon">🌸</span> <span class="btn-text">ĐANG TẢI YÊU THƯƠNG...</span>';
        logContainer.innerHTML = '';

        logs.forEach((log, index) => {
            setTimeout(() => {
                const now = new Date();
                const timeStr = now.toLocaleTimeString('vi-VN', { hour12: false });

                const html = `
                    <div class="log-item">
                        <div class="timestamp">[${timeStr}] :: PID_${log.pid}</div>
                        <div>
                            <span class="tag ${log.tagClass}">${log.tag}</span>
                            ${log.content}
                        </div>
                    </div>`;

                logContainer.insertAdjacentHTML('beforeend', html);
                logContainer.scrollTop = logContainer.scrollHeight;

                // When last log finishes
                if (index === logs.length - 1) {
                    isFinished = true;
                    runBtn.disabled = false;
                    runBtn.innerHTML = '<span class="btn-icon">✨</span> <span class="btn-text">MỞ THIỆP CHÚC MỪNG 20/10</span>';
                    runBtn.style.background = 'linear-gradient(135deg, #ff4081 0%, #e91e63 100%)';
                    runBtn.style.boxShadow = '0 12px 30px rgba(233, 30, 99, 0.45)';
                }
            }, index * 1200);
        });
    });

    // Replay button handler
    replayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wishCard.classList.remove('show');
        logWindow.classList.remove('fade-out');
        runBtn.style.display = 'flex';
        runBtn.disabled = false;
        isFinished = false;
        runBtn.innerHTML = '<span class="btn-icon">💖</span> <span class="btn-text">KÍCH HOẠT LỜI CHÚC 20/10</span>';
        runBtn.style.background = 'linear-gradient(135deg, #ff758c 0%, #ff5277 100%)';
        runBtn.style.boxShadow = '0 10px 25px rgba(255, 82, 119, 0.4)';

        logContainer.innerHTML = `
            <div class="log-item initial">
                <div class="timestamp">[20.10] :: SYSTEM_INITIALIZE</div>
                <div>
                    <span class="tag tag-ready">[READY]</span> 
                    Hệ thống đã sẵn sàng khởi tạo những điều ngọt ngào nhất... Nhấn nút bên dưới để bắt đầu! ✨
                </div>
            </div>`;
    });
});