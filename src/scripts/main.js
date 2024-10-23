class Button {
    constructor(id, container, temp_button) {
        this.id = id;
        this.container = container;
        this.temp_button = temp_button;
    }

    load_button() {
        const button = this.temp_button.cloneNode(true);
        button.style.top = `${490 + (this.id * 200)}px`;
        button.addEventListener('click', () => play_lesson(this.id))
        this.container.appendChild(button);
    }
}

class LessonInfo {
    constructor(id, container, temp_div) {
        this.id = id;
        this.container = container;
        this.temp_div = temp_div;
    }

    create_info() {
        // destroy previous info
        if (document.querySelector('.new_lesson_info') != null) {
            const old_lesson_info = document.querySelector('.new_lesson_info');
            old_lesson_info.remove();
        }
        
        // create new info
        const new_lesson_info = this.temp_div.cloneNode(true); 
        new_lesson_info.style.top = `${400 + (this.id * 200)}px`;
        new_lesson_info.style.visibility = 'visible';
        new_lesson_info.classList.add('new_lesson_info');
        this.container.appendChild(new_lesson_info);
    }
}

function drawRoadmap(count) {
    const container = document.querySelector('#roadmap');
    const node = document.querySelector('.node');
    const button_template = document.querySelector('.node-button');
    node.style.top = '480px';

    for (let i=0; i<count; i++) {
        const div = node.cloneNode(true);
        div.style.top = `${480 + (i * 200)}px`;
        container.appendChild(div);
    }

    // Load Progress
    for (let i=0; i<Number(localStorage.getItem('last_lesson_id')); i++) {
        const button = new Button(i, container, button_template);
        button.load_button();
    }
}

function play_lesson(lesson_id) {
    // console.log(lesson_id);
    const container = document.querySelector('#roadmap');
    const temp_div = document.querySelector('.lesson-info');
    const lesson_info = new LessonInfo(lesson_id, container, temp_div);
    lesson_info.create_info()
}

// initialize site
const container = document.querySelector('#roadmap');
const button_template = document.querySelector('.node-button');

if (localStorage.getItem('last_lesson_id') == null) {
    localStorage.setItem('last_lesson_id', '1');
}

localStorage.setItem('last_lesson_id', '5'); // debug REMOVE THIS LATER !!

drawRoadmap(35);

