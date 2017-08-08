// пробки
export default class Cork {

    constructor(height = 100) {
        this.parents =  [].slice.call(document.querySelectorAll('.mini__corks'));
        this.height = height;
        this.corks = this._add();
        this.propantpost =  [].slice.call(document.querySelectorAll('.propantpost'));
    }

    _add() {
        var mini__corks = [];
        this.parents.forEach(parent => {
            var mini__cork = document.createElement('div');
            mini__cork.className = 'mini__cork';
            mini__cork.style.height = this.height + 'px';

            var cork = document.createElement('div');
            cork.className = 'cork';

            var propant = document.createElement('div');
            propant.className = 'propant';

            mini__cork.appendChild(cork);
            mini__cork.appendChild(propant);

            parent.appendChild(mini__cork);

            mini__corks.push(mini__cork);

        });

        return mini__corks;

    }

    // промыл корку
    washed(time = 100) {
        setTimeout(() => {
            this.propantpost.forEach((element) => {
                this._growing(900);
                // this._opacity(9000);
            });
            this.corks.forEach((element) => {
               element.querySelector('.cork').style.opacity = 0;
            });
        }, time);
    }

    _growing(height) {
         this.propantpost.forEach((element) => {
                element.style.height = height + 'px';
            });
    }

    // скрыть показать промывку
    setOpacity(option) {
              this.propantpost.forEach((element) => {
                element.style.opacity = option;
            });
    }
    
    // позиционирование
    setPosition(pixels) {
         this.corks.forEach(item => {
             item.style.top = pixels + 'px';
            });
    }

    // высота
    setHeight(pixels) {
         this.corks.forEach(item => { item.style.height = pixels + 'px'; });
    }
  
    // уменьшение пропанта
    reduction(pixels) {
         this.corks.forEach(item => { item.querySelector('.propant').style.height = pixels + 'px'; });
    }
    
}

