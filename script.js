document.addEventListener('DOMContentLoaded', () => {
    // 1. Typewriter Effect
    const text = "A Roblox Developer & CSE Student.";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    // 2. Skill Injection
    const skills = ['Java', 'Python', 'C++', 'HTML', 'CSS', 'C', 'Luau (Roblox)', 'Problem Solving'];
    const container = document.getElementById('skills-box');
    skills.forEach(s => {
        const span = document.createElement('span');
        span.className = 'skill-pill';
        span.innerText = s;
        container.appendChild(span);
    });

    // 3. Scroll Reveal Animation
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
