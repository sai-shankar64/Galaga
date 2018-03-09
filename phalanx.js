var Phalanx = function (rows, cols, img) {
    this.rows = rows;
    this.cols = cols;
    this.dim = 60;
    this.src = img;
    this.moveRight = true;
};

Phalanx.prototype.setup = function () {
    var k = 0;
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
            k++;
            var e = new Enemy(j * this.dim, i * this.dim, this.src, k);
            e.setup();
        }
    }
}

Phalanx.prototype.attack = function () {
    var self = this;
    console.log(this.moveRight);
    $('#phalanx').animate({
        'left': this.moveRight ?
            $(window).width() - this.dim * this.cols - 10 + 'px' :
            '10px'
    }, 5000, "linear", function () {
        self.moveRight = !self.moveRight;
        if ($(this).position().top + self.dim * self.rows < $(window).height() - 10) {
            $(this).animate({
                'top': '+=30px'
            }, 1000, "linear", function () {
                self.attack();
            });
        }
    })
}