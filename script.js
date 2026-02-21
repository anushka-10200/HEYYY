document.addEventListener('DOMContentLoaded', () => {
    const skills = ['Java', 'Python', 'C++', 'HTML', 'CSS', 'C'];
    const container = document.getElementById('skill-container');

    // Dynamically create skill chips
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill';
        div.innerText = skill;
        
        // Add a click effect for fun
        div.addEventListener('click', () => {
            console.log(`Mastering ${skill}...`);
        });

        container.appendChild(div);
    });

    console.log("Anushka's Portfolio Loaded!");
});