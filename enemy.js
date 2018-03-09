var Enemy = function(x, y, img, id) {
    this.x = x;
    this.y = y;
    this.src = img;
    this.id = id;
    this.elem = null;
}

Enemy.prototype.setup = function() {
    this.elem = $('<img id="enemy' + this.id + '" src="' + this.src + '" class="enemy">');
    this.elem.css({ top: this.y + 'px', left: this.x + 'px' });
    $('#phalanx').append(this.elem);
}
