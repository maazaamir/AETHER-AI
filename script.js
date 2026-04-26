document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const menuBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }

    // Close when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // 2. Stat Counter Animation
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const duration = 1500; 
        const step = target / (duration / 16);

        function animate() {
            current += step;
            if (current < target) {
                stat.innerText = Math.floor(current).toLocaleString();
                requestAnimationFrame(animate);
            } else {
                stat.innerText = target.toLocaleString();
            }
        }
        animate();
    });
});