var canvas= new fabric.Canvas("my_Canvas");

var block_object_height=30;
var block_object_width=30;


var playerx=10;
var playery=10;


var playerobject="";
var blockobject="";

function updateimg(){
    fabric.Image.fromURL("player.png",function(img){
playerobject=img;
playerobject.scaleToHeight(140);
playerobject.scaleToWidth(150);
playerobject.set({
    top:playery,
    left:playerx
})
canvas.add(playerobject);
    })
}
function newimg(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_object_img=img;
        block_object_img.scaleToHeight(block_object_height)
        block_object_img.scaleToWidth(block_object_width)
        block_object_img.set({
            top:playery,
            left:playerx
        })
        canvas.add(block_object_img);
    })
    }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if (e.shiftKey == true && keypressed == "80") {
        block_object_width = block_object_width + 10;
        block_object_height = block_object_height + 10;
        document.getElementById("current_width").innerHTML = block_object_width;
        document.getElementById("current_height").innerHTML = block_object_height
    }
    
    if (e.shiftKey == true && keypressed == "77") {
        block_object_width = block_object_width - 10;
        block_object_height = block_object_height - 10;
            document.getElementById("current_height").innerHTML = block_object_height;
            document.getElementById("current_width").innerHTML = block_object_width;
    }  
    if (keypressed == '40'){
        down();
        console.log("down")
    } 
    if (keypressed == '38'){
        up();
        console.log("up")
    } 
    if (keypressed == '37'){
        right();
        console.log("right")
    } 
    if (keypressed == '39'){
        left();
        console.log("left")
    } 
    if (keypressed == '67'){
        newimg("cloud.jpg")
        console.log("c")
    } 
    if (keypressed == '68'){
        newimg("dark_green.png");
        console.log("d")
    } 
    if (keypressed == '71'){
        newimg("ground.png");
        console.log("g")
    } 
    if (keypressed == '76'){
        newimg("light_green.png");
        console.log("l")
    }
    if (keypressed == '82'){
        newimg("roof.jpg")
        console.log("r")
    }
    if (keypressed == '84'){
        newimg("trunk.jpg")
        console.log("t")
    }
    if (keypressed == '85'){
        newimg("unique.png")
        console.log("u")
    }
    if (keypressed == '87'){
        newimg("wall.jpg")
        console.log("w")
    }
    if (keypressed == '89'){
        newimg("yellow_wall.png")
        console.log("y")
    } 
}
function up(){
    if (playery > 0){
        playery = playery - block_object_height;
        console.log("Block image height = " + block_object_height);
        canvas.remove(playerobject);
        updateimg();
    }
}
function down(){
    if (playery < 500){
        playery = playery + block_object_height;
        console.log("block image height = " + block_object_height);
        canvas.remove(playerobject);
        updateimg();
    }
}
function left(){
    if (playerx > 0){
        playerx = playerx - block_object_width;
        console.log("Block img width = " + block_object_width);
        canvas.remove(playerobject);
        updateimg();
    }
}
function right(){
    if (playerx < 850){
        playerx = playerx + block_object_width;
        console.log("Block image width = " + block_object_width);
        canvas.remove(playerobject);
        updateimg();
    }
}