var Hithandler = function () {

}

Hithandler.prototype.checkHits = function () {
    var self = this;
    var p = $('#phalanx');
    var tx = p.position().left;
    var ty = p.position().top;
    $('.bullet').each(function () {
        var bullet = $(this);
        $('.enemy').each(function () {
            var enemy = $(this);
            var bx = bullet.position().left;
            var by = bullet.position().top;
            var ex = enemy.position().left + tx;
            var ey = enemy.position().top + ty;
            if (bx > ex && bx < ex + 60 && by < ey + 60 && by > ey) {
                enemy.attr('src', 'images/blast.gif').load(function(){
                    $(this).fadeOut(1000, function() {
                        $(this).remove();
                    });
                });
                $('#killsound').get(0).load();
                $('#killsound').get(0).play();
                bullet.remove();
                return false;
            }
        })
    });
    setTimeout(function () {
        self.checkHits();
    }, 100);
}