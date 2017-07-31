export default class Tubes {

    constructor() {
        // труба
        this.mini__tube_tubes = document.querySelectorAll('.mini__tube_tube');

        this.flag = false;
        
        this.imgPotoks = document.querySelectorAll('img.potok');

        this.aspos = document.querySelectorAll('.mini__aspo');
    }

    position(pixels) {
       
        this.mini__tube_tubes.forEach(item => {
            item.style.height = pixels + 'px';

        })
   

    }

    // поток
    waterFlow() {
        var flag = this.toggle() ? 1 : 0;
        this.imgPotoks.forEach(imgPotok => {
            imgPotok.style.opacity = flag;
        });
    }

    toggle() {
        this.flag = !this.flag
        return this.flag;
    }

     aspoPosition(pixels) {
        this.aspos.forEach(item => {
            item.style.top = pixels + 'px';
        });
    }

    aspoShow() {
        this.aspos.forEach(item => {
            item.style.opacity = 1;
        });
    }

    
    aspoHide() {
        this.aspos.forEach(item => {
            item.style.opacity = 0;
        });
    }
}

