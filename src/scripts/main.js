class Button {
    constructor(id, container, temp_button) {
        this.id = id;
        this.container = container;
        this.temp_button = temp_button;
    }

    load_button() {
        const button = this.temp_button.cloneNode(true);
        button.style.top = `${490 + (this.id * 200)}px`;
        button.addEventListener('click', () => popup_lesson_info(this.id))
        this.container.appendChild(button);
    }
}

class LessonInfo {
    constructor(id, container, temp_div, temp_title, temp_type, temp_button) {
        this.id = id;
        this.container = container;
        this.temp_div = temp_div;
        this.temp_title = temp_title;
        this.temp_type = temp_type;
        this.temp_button = temp_button;
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
        
        const lesson_title = this.temp_title.cloneNode(true);
        lesson_title.style.visibility = 'visible';

        const lesson_type = this.temp_type.cloneNode(true);
        lesson_type.style.visibility = 'visible';

        const lesson_button = this.temp_button.cloneNode(true);
        lesson_button.style.visibility = 'visible';
        lesson_button.addEventListener('click', () => play_lesson(this.id))

        new_lesson_info.appendChild(lesson_title);
        new_lesson_info.appendChild(lesson_type);
        new_lesson_info.appendChild(lesson_button);
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

function popup_lesson_info(lesson_id) {
    // console.log(lesson_id);
    const container = document.querySelector('#roadmap');
    const temp_div = document.querySelector('.lesson-info');
    const temp_title = document.querySelector('.lesson-title');
    const temp_type = document.querySelector('.lesson-type');
    const temp_button = document.querySelector('.start-lesson-button');
    const lesson_info = new LessonInfo(lesson_id, container, temp_div, temp_title, temp_type, temp_button);
    lesson_info.create_info()
}

function play_lesson(lesson_id) {
    console.log('test')
    localStorage.setItem('current_lesson_id', lesson_id)
    window.location.href = "lesson.html";
}

// initialize site
const container = document.querySelector('#roadmap');
const button_template = document.querySelector('.node-button');

if (localStorage.getItem('last_lesson_id') == null) {
    localStorage.setItem('last_lesson_id', '1');
}

localStorage.setItem('last_lesson_id', '5'); // debug REMOVE THIS LATER !!

drawRoadmap(35);

