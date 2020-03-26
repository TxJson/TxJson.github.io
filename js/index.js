//index.js

import * as tmplt from './mjs/templates.mjs';

function home() {
    state = (state !== 'home') ? setState('home') : 'home';
}

function about() {
    state = (state !== 'about') ? setState('about') : 'about';
}

function work() {
    state = (state !== 'work') ? setState('work') : 'work';
}

function blog() {
    return; //Since blog won't be implemented yet, just return

    state = (state !== 'blog') ? setState('blog') : 'blog';
}

function contact() {
    state = (state !== 'contact') ? setState('contact') : 'contact';

}

function setState(aState) {

    //Set the template state.

    return aState;
}

document.getElementById('home-btn').addEventListener('click', home);
document.getElementById('about-btn').addEventListener('click', about);
document.getElementById('work-btn').addEventListener('click', work);
document.getElementById('blog-btn').addEventListener('click', blog);
document.getElementById('contact-btn').addEventListener('click', contact);

//Sets state to default homepage.
home();
