export default class Tubes {

    constructor() {
        // труба
        this.mini__tube_tubes = document.querySelectorAll('.mini__tube_tube');
        this.flag = false;
        this.imgPotoks = document.querySelectorAll('img.potok');

    }

    position(pixels) {
        this.mini__tube_tubes.forEach(item => {
            item.style.height = pixels + 'px';
        })
    }

    // поток
    waterFlow() {
        this.imgPotoks.forEach(imgPotok => {
            imgPotok.style.opacity = this.toggle() ? 1 : 0;
        });
    }

    toggle() {
        this.flag = !this.flag
        return this.flag;
    }

}

