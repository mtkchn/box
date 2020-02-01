let square = document.getElementById('square');
let container = document.getElementById('container');
let position;
let mouseX;
let mouseY;
let crd;
const activate = 10;
let status;

window.onload = function () {
    init();

}

function init() {
    document.addEventListener('mousemove', onMouseMove);
    square.addEventListener('mouseover', mouseEnter);
    square.addEventListener('mouseout', mouseLeave);
}

function mouseEnter() {
    status = true;
}


function mouseLeave() {
    status = false;

}

function checkBorder() {
    e = square.getBoundingClientRect();
    crdContainere = container.getBoundingClientRect();


    switch (true) {
        case e.top <= crdContainere.top && e.right >= crdContainere.right:

            square.style.top = `0px`;
            square.style.left = `${crdContainere.right-e.width}px`;
            break;

        case e.top <= crdContainere.top && e.left <= crdContainere.left:

            square.style.top = `0px`;
            square.style.left = `0px`;
            break;

        case e.bottom >= crdContainere.bottom && e.left <= crdContainere.left:

            square.style.top = `${crdContainere.bottom - e.height}px`;
            square.style.left = `0px`;
            break;

        case e.bottom >= crdContainere.bottom && e.right >= crdContainere.right:


            square.style.top = `${crdContainere.bottom - e.height}px`;
            square.style.left = `${crdContainere.right - e.width}px`;

            break;

        case e.top <= crdContainere.top:
            console.log('container top : ', crdContainere.top, 'Kwadrat top : ', e.top);

            square.style.top = `0px`;
            break;

        case e.right >= crdContainere.right:
            console.log('container right : ', crdContainere.right, 'Kwadrat right : ', e.right);

            square.style.left = `${crdContainere.right-e.width}px`;

            break;
        case e.bottom >= crdContainere.bottom:
            console.log('container bottom : ', crdContainere.bottom, 'Kwadrat bottom : ', e.bottom);

            square.style.top = `${crdContainere.bottom - e.height}px`;

            break;
        case e.left <= crdContainere.left:
            console.log('container LEFT : ', crdContainere.left, 'Kwadrat LEFT : ', e.left);
            square.style.left = `0px`;
            break;
    }
}



function move() {

    switch (position) {
        case 'north-west':

            if (mouseX - crd.left > mouseY - crd.top) {
                displace = Math.floor(crd.left + (mouseY - crd.top));
                square.style.left = `${displace}px`;
                displace = Math.floor(crd.top + (mouseY - crd.top));
                square.style.top = `${displace}px`;

            } else {

                displace = Math.floor(crd.left + (mouseX - crd.left));
                square.style.left = `${displace}px`;
                displace = Math.floor(crd.top + (mouseX - crd.left));
                square.style.top = `${displace}px`;

            }
            break;

        case 'north-east':

            if (Math.abs(mouseX - crd.right) > Math.abs(mouseY - crd.top)) {

                displace = Math.floor(crd.left - (mouseY - crd.top));
                square.style.left = `${displace}px`
                displace = Math.floor(crd.top + (mouseY - crd.top));
                square.style.top = `${displace}px`;

            } else {

                displace = Math.floor(crd.left + (mouseX - crd.right));
                square.style.left = `${displace}px`
                displace = Math.floor(crd.top - (mouseX - crd.right));
                square.style.top = `${displace}px`;

            }
            break;

        case 'south-east':

            if (Math.abs(mouseX - crd.right) > Math.abs(mouseY - crd.bottom)) {

                displace = crd.left + (mouseY - crd.bottom);
                square.style.left = `${displace}px`
                displace = crd.top + (mouseY - crd.bottom);
                square.style.top = `${displace}px`;

            } else {

                displace = crd.left + (mouseX - crd.right);
                square.style.left = `${displace}px`
                displace = crd.top + (mouseX - crd.right);
                square.style.top = `${displace}px`;

            }
            break;
        case 'south-west':

            if (Math.abs(mouseX - crd.left) > Math.abs(mouseY - crd.bottom)) {
                displace = crd.left - (mouseY - crd.bottom);
                square.style.left = `${displace}px`
                displace = crd.top + (mouseY - crd.bottom);
                square.style.top = `${displace}px`;


            } else {
                displace = crd.left + (mouseX - crd.left);
                square.style.left = `${displace}px`
                displace = crd.top - (mouseX - crd.left);
                square.style.top = `${displace}px`;
            }
            break;
        case 'north':

            displace = Math.floor(crd.top + (mouseY - crd.top));
            square.style.top = `${displace}px`
            break;

        case 'south':
            displace = Math.floor(crd.top + (mouseY - crd.bottom));
            square.style.top = `${displace}px`
            break;
        case 'east':

            displace = Math.floor(crd.left + (mouseX - crd.right));
            square.style.left = `${displace}px`
            break;
        case 'west':
            displace = Math.floor(crd.left + (mouseX - crd.left));
            square.style.left = `${displace}px`
            break;
    }
    checkBorder();
}



function onMouseMove(event) {
    crd = square.getBoundingClientRect();
    mouseX = event.clientX;
    mouseY = event.clientY
    document.getElementById('mouseX').innerHTML = mouseX;
    document.getElementById('mouseY').innerHTML = mouseY;


    document.getElementById('left').innerHTML = crd.left;
    document.getElementById('top').innerHTML = crd.top;
    document.getElementById('right').innerHTML = crd.right;
    document.getElementById('bottom').innerHTML = crd.bottom;

    switch (true) {
        case
        mouseX > crd.left - activate &&
        mouseX < crd.left + activate &&
        mouseY > crd.top - activate &&
        mouseY < crd.top + activate:
            position = 'north-west';
            break;

        case
        mouseX < crd.right + activate &&
        mouseY > crd.top - activate &&
        mouseX > crd.right - activate &&
        mouseY < crd.top + activate:
            position = 'north-east';
            break;

        case
        mouseX < crd.right + activate &&
        mouseY < crd.bottom + activate &&
        mouseX > crd.right - activate &&
        mouseY > crd.bottom - activate:
            position = 'south-east';
            break;

        case
        mouseX > crd.left - activate &&
        mouseY < crd.bottom + activate &&
        mouseX < crd.left + activate &&
        mouseY > crd.bottom - activate:
            position = 'south-west';
            break;


        case
        mouseX > crd.left &&
        mouseY < crd.top &&
        mouseX < crd.right:

            position = 'north';
            break;

        case
        mouseX > crd.left &&
        mouseY > crd.bottom &&
        mouseX < crd.right:

            position = 'south';
            break;

        case
        mouseX < crd.left &&
        mouseY > crd.top &&
        mouseY < crd.bottom:

            position = 'west';
            break;

        case
        mouseX > crd.right &&
        mouseY > crd.top &&
        mouseY < crd.bottom:

            position = 'east';
            break;
    }

    if (status) {
        move();
    }
}