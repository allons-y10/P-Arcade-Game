// Enemies our player must avoid
var Enemy = function(enemyX, enemyY, enemySpeed) {
    this.x = enemyX;
    this.y = enemyY;
    this.speed = getRandomInt(2, 4);
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

     if (this.x > 500) {
        this.x = -100;
     }

    this.x += this.speed;
    //this.x = this.speed * dt;
};

Enemy.prototype.checkCollisions = function() {
     if  (

           ( (this.x + (this.width/2) ) >= player.x) &&
            (this.x <= (player.x + (player.width/2) )) &&
          ((this.y + (this.height/2) )>= player.y) &&
            (this.y <= (player.y + (player.height/2) ))

           ){
                player.x = 200;
                player.y = 400;
        }


};

//Enemy.prototype.reset = function(speed) {
    //this.x = 0;
     //speed = Math.random() * (min - max) +min;
     //return speed;
//};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Now write your own player class
var Player = function(playerX, playerY) {
    this.x = playerX;
    this.y = playerY;
    this.sprite = 'images/char-boy.png';
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(dic){

    if (dic === 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (dic === 'right' && this.x < 400) {
        this.x += 100;
    }
    if (dic === 'up' && this.y > 0) {
        this.y -= 30;
    }
    if (dic === 'down' && this.y < 400) {
        this.y += 100;
    }

};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//var enemy1 = new Enemy(-75, 255, this.speed);
//var enemy2 = new Enemy(-75, 145, this.speed);
//var enemy3 = new Enemy(-75, 55, this.speed);

var allEnemies = [new Enemy(0, 63), new Enemy(200, 146), new Enemy(400, 229)];
// Place the player object in a variable called player

//Player.prototype.update = function() {

//}



//for (var i = 0; i < 3; i++) {
    //var tempSpeed = Math.floor(Math.random() * 5+1) *75;
    //allEnemies.push(new Enemy(-60, 60 + 85 * i, tempSpeed));
//}

var player = new Player(200, 350, 50);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
