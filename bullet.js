var Bullet = function(x, y, img) {
    this.x = x;
    this.y = y;
    this.src = img;
}

Bullet.prototype.setup = function() {
    var b =
    $('<img src="'+this.src+'" class="bullet">')
    .css({
        'top': this.y + 'px',
        'left': this.x + 'px'
    })
    .load(function() {
        $('#firesound').get(0).load();
        $('#firesound').get(0).play();
        $(this).animate({
            'top': '-10px'
        }, 1000, "linear", function() {
            $(this).remove();
        })
    });
    $('body').append(b);
}