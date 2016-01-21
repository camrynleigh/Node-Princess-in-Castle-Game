var Status = ["Big", "Small", "Powered Up", "Dead"];

var player = {
    name: 'Mario',
    totalCoins: 7,
    status: Status[1],
    star: true,

    setName: function (namePicked) {
        this.name = namePicked;
    },

    gotHit: function () {
        if (this.status == Status[0]) {
            this.status = Status[1];
        } else if (this.status == Status[1]) {
            this.status = Status[3];
        } else if (this.status == Status[2]) {
            this.status = Status[0];
        }
    },

    gameActive: true,

    gotPoweredup: function () {
        this.status = Status[2];
    },

    addCoin: function () {
        this.totalCoins++;
    },

    print: function () {
        console.log('Name:' + this.name);
        console.log('Status:' + this.status);
        console.log('totalCoins:' + this.totalCoins);
        console.log('star:' + this.star);
    }
};

function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < 3; i++) {
    var random = getRandom(0, 2);
    if (random == 0) {
        player.gotHit();
    } else if (random == 1) {
        player.gotPoweredup();
    } else if (random == 2) {
        player.addCoin();
    }

    player.print();
}