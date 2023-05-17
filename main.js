var canvas = new fabric.Canvas("myCanvas")
player_x = 10;
player_y = 10;
blockwidth = 30;
blockheight = 30;
var player = "";
var block = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player = Img;
        player.scaleToWidth(150)
        player.scaleToHeight(140)
        player.set({
            left: player_x, top: player_y,
        });
        canvas.add(player);
    })

}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block = Img;
        block.scaleToWidth(blockwidth);
        block.scaleToHeight(blockheight);
        block.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block);
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
if (keyPressed == "67"){
    new_image("cloud.jpg");
    console.log("c");
}
if (keyPressed == "68"){
    new_image("dark_green.png");
    console.log("d");
}
if (keyPressed == "71"){
    new_image("ground.png");
    console.log("g");
}
if (keyPressed == "76"){
    new_image("light_green.png");
    console.log("l");
}
if (keyPressed == "82"){
    new_image("roof.jpg");
    console.log("r");
}
if (keyPressed == "84"){
    new_image("trunk.jpg");
    console.log("t")
}
if (keyPressed == "85"){
    new_image("unique.png");
    console.log("u")
}
if (keyPressed == "87"){
    new_image("wall.jpg");
    console.log("w")
}
if (keyPressed == "89"){
    new_image("yellow_wall.png");
    console.log("y")
}


}
function left() {
    if (player_x >= 0) {
        player_x = player_x - blockwidth;
        canvas.remove(player);
        player_update();
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - blockheight;
        canvas.remove(player);
        player_update();
    }
}
function right() {
    if (player_x <= 850) {
        player_x = player_x + blockwidth;
        canvas.remove(player);
        player_update();
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + blockheight;
        canvas.remove(player);
        player_update();
    }
}