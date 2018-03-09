var player;
var phalanx;
var hithandler;
$(document)
    .ready(function () {
        player = new Player($(window).width()/2-25, $(window).height()-200, 10, 10, 'images/player.png', 1);
        player.setup();
        phalanx = new Phalanx(3, 12, 'images/enemy.png');
        phalanx.setup();
        phalanx.attack();
        hithandler = new Hithandler();
        hithandler.checkHits();
        if($('#phalanx').hasChildNodes==false){
            alert('you won');
        }
    })
    .keydown(function (k) {
        if (k.which === 37) {// left arrow key 
            k.preventDefault();
            player.moveLeft();
        } else if (k.which === 38) {// up arrow key 
            k.preventDefault();
            player.moveUp();
        } else if (k.which === 39) {// right arrow key 
            k.preventDefault();
            player.moveRight();
        } else if (k.which === 40) {// down arrow key 
            k.preventDefault();
            player.moveDown();
        } else if (k.which === 32) {// space bar to shoot 
            k.preventDefault();
            player.shoot();
        }
        
    }

    );