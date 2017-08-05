class Cork {
    constructor(height = 100) {
        this.parents = document.querySelectorAll('.mini__corks');
        this.height = height;
        this.corks = this._add();
    }


    _add() {
        var mini__corks = [];
        this.parents.forEach(function(parent) {
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
        setTimeout(function()  {
            this.corks.forEach(function(element) {
                this._growing(500);
                this._opacity(9000);
            });

        }, time);
    }

    _growing(height) {
        this.corks.forEach(function(element) {
            element.style.height = height + 'px';
        });
    }


    _opacity() {
        this.corks.forEach(function(element) {
            element.style.opacity = 0;
        });
    }

}