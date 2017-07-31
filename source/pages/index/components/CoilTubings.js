export default class CoilTubings {
    constructor() {
        this.coilTubing = document.querySelectorAll('.mini__coilTubing_tube');
        this.height;
        this.aspos = document.querySelectorAll('.mini__aspo');
    }

    position(pixels) {
        this.height = pixels;
        this.coilTubing.forEach(item => {
            item.style.height = pixels + 'px';
        });
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