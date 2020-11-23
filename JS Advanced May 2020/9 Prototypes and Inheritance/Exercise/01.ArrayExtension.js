(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(0 + n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, 0 + n);
    };
    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach(element => sum += Number(element));
        return sum;
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;
    };
})();