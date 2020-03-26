//index.js

import * as tmplt from './mjs/templates.mjs';

function home() {
    state = (state !== 'home') ? setState('home') : 'home';
}

function about() {
    return;
    state = (state !== 'about') ? setState('about') : 'about';
}

function work() {
    return;
    state = (state !== 'work') ? setState('work') : 'work';
}

function blog() {
    return;

    state = (state !== 'blog') ? setState('blog') : 'blog';
}

function contact() {
    state = (state !== 'contact') ? setState('contact') : 'contact';

}

function setState(aState) {
    if (state !== '') {
        document.getElementById(state).classList.toggle('active');
        tmplt.clear(document.getElementById('wrapper'));
    }

    document.getElementById(aState).classList.toggle('active');
    tmplt.append(document, document.getElementById(aState+'-template'), '#wrapper');

    return aState;
}

document.getElementById('home-btn').addEventListener('click', home);
document.getElementById('about-btn').addEventListener('click', about);
document.getElementById('work-btn').addEventListener('click', work);
//document.getElementById('blog-btn').addEventListener('click', blog);
document.getElementById('contact-btn').addEventListener('click', contact);

let state = '';
state = setState('home');

//Sets state to default homepage.
