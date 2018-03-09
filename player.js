var Player = function (x, y, xstep, ystep, imagesrc, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.xstep = xstep;
    this.ystep = ystep;
    this.src = imagesrc;
    this.elem = null;
}

Player.prototype.setup = function () {
    this.elem = $('<img id="player' + this.id + '" src="' + this.src + '" class="player">');
    this.elem.css({ top: this.y + 'px', left: this.x + 'px' });
    $('body').append(this.elem);
}

Player.prototype.moveRight = function () {
    if ($(window).width() > this.x + this.xstep + this.elem.width()) {
        this.x += this.xstep;
        this.elem.css('left', this.x + 'px');
    }
}

Player.prototype.moveLeft = function () {
    if (this.x > this.xstep) {
        this.x -= this.xstep;
        this.elem.css('left', this.x + 'px');
    }
}

Player.prototype.moveDown = function () {
    if ($(window).height() > this.y + this.ystep + this.elem.height()) {
        this.y += this.ystep;
        this.elem.css('top', this.y + 'px');
    }
}

Player.prototype.moveUp = function () {
    if (this.y > $(window).height() - 300 ) {
        this.y -= this.ystep;
        this.elem.css('top', this.y + 'px');
    }
}

Player.prototype.shoot = function () {
    var bullet = new Bullet(
        parseInt(this.x + this.elem.width() / 2 - 6),
                 this.y,
                 'images/bullet.png');
    bullet.setup();
}