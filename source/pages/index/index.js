import './index.scss';
import 'normalize.css';

// труба
var mini__tube_tubes = document.querySelectorAll('.mini__tube_tube');
var tubeRange = document.querySelector('#tubeRange');



var mini__coilTubing_tubes = document.querySelectorAll('.mini__coilTubing_tube');
var coilTubing = document.querySelector('#coilTubingRange');

read("mousedown");
read("mousemove");

function read(evtType) {
    tubeRange.addEventListener(evtType, function () {
        window.requestAnimationFrame(function () {
            console.log(tubeRange.value);
            mini__tube_tubes.forEach(item =>{
                item.style.height = tubeRange.value + 'px';
            });
        });
    });

    coilTubing.addEventListener(evtType, function () {
        window.requestAnimationFrame(function () {
            console.log(coilTubing.value);
            mini__coilTubing_tubes.forEach(item =>{
                item.style.height = coilTubing.value + 'px';
            });
        });
    });
}


// поток

var imgPotoks = document.querySelectorAll('img.potok');

var buttonPotok = document.querySelector('button#potok');


function sw() {
    var swit = false;
    return ()=>{
        swit = !swit;
        return swit;
    }
}

var potokVisible = sw();

buttonPotok.onclick = () => {
    imgPotoks.forEach(imgPotok => {
        imgPotok.style.opacity = potokVisible() ? 1: 0 ;

    })
};

