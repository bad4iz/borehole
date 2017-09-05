export default class CoilTubings {
    constructor() {
        this.coilTubing = [].slice.call(document.querySelectorAll('.mini__coilTubing_tube'));



        this.height;

        this.magnifier = document.querySelector('.magnifier');
        this.top = 1500;
        this.magnifier.style.top = this.top + 'px';
    }

    position(pixels) {
        this.height = pixels;
        this.coilTubing.forEach(item => {
            item.style.height = pixels + 'px';
        });
        this.magnifier.style.top = this.top - 4 * pixels + 'px';
    }
   
}