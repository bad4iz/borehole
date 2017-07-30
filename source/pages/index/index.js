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
            mini__tube_tubes.forEach(item => {
                item.style.height = tubeRange.value + 'px';
            });
        });
    });

    coilTubing.addEventListener(evtType, function () {
        window.requestAnimationFrame(function () {
            console.log(coilTubing.value);
            mini__coilTubing_tubes.forEach(item => {
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
    return () => {
        swit = !swit;
        return swit;
    }
}

var potokVisible = sw();

buttonPotok.onclick = () => {
    imgPotoks.forEach(imgPotok => {
        imgPotok.style.opacity = potokVisible() ? 1 : 0;

    })
};


// пробки
class Cork {
    constructor(height) {
        this.parent = document.querySelector('.mini__corks');
        this.height = height;
        this.cork = this.add();
    }
    add() {

        var mini__cork = document.createElement('div');
        mini__cork.className = 'mini__cork';
        mini__cork.style.height = this.height + 'px';

        var cork = document.createElement('div');
        cork.className = 'cork';
        var propant = document.createElement('div');
        propant.className = 'propant';

        mini__cork.appendChild(cork);
        mini__cork.appendChild(propant);

        this.parent.appendChild(mini__cork);

        return mini__cork;

    }

    washed(time = 3000) {
        setTimeout(() => {
            this.growing(500);
            this.opacity(9000);

        }, time);
    }

    growing(height) {
        this.cork.style.height = height + 'px';
    }

    opacity(time) {
        setTimeout(() => {
           this.cork.style.opacity = 0;
        }, time);
    }

}


var cork = new Cork(10);
var cork2 = new Cork(120);

cork2.washed();
// cork2.growing(22);