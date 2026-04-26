document.addEventListener('DOMContentLoaded', () => {
    // 1. Number Counter Animation
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let count = 0;
        const duration = 1500; 
        const increment = target / (duration / 16);

        function update() {
            count += increment;
            if (count < target) {
                stat.innerText = Math.floor(count).toLocaleString();
                requestAnimationFrame(update);
            } else {
                stat.innerText = target.toLocaleString();
            }
        }
        update();
    });

    // 2. Mobile Sidebar Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');

    if (menuBtn) {
        // Only show button on mobile
        if(window.innerWidth <= 768) menuBtn.style.display = 'block';

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking a link (on mobile)
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768) sidebar.classList.remove('active');
        });
    });
});