function drawRoadmap(count) {
    const container = document.querySelector('#roadmap');
    const template = document.querySelector('.node');
    template.style.top = '480px';

    for (let i=0; i<count; i++) {
        const div = template.cloneNode(true);
        div.style.top = `${480 + (i * 200)}px`;
        container.appendChild(div)
    }
}

// initialize site
drawRoadmap(35)