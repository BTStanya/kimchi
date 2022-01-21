//Create a reference for canvas 

greencar_width=70;
greencar_heigth=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=200;

function add() {
	background_imgTag = new Image(); background_imgTag.onload = uploadBackground; background_imgTag.src = background_image; greencar_imgTag = new Image(); greencar_imgTag.onload = uploadgreencar; greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage (background_imgTag,0,0,canvas.width,canvas.heigth)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage (greencar_imgTag,0,0,greencar_width.width,greencar_heigth)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	
}

function down(){
    if (player_y<=500){
        
        console.log("green car x  ="+greencar_x);
		console.log("green car y="+greencar_y);
        console.log("when down arrow is pressed,x="+player_x +"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>=0){
       
		console.log("green car x  ="+greencar_x);
		console.log("green car y="+greencar_y);
        console.log("when left arrow is pressed,x="+player_x +"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<=850){
        console.log("green car x  ="+greencar_x);
		console.log("green car y="+greencar_y);
        console.log("when right arrow is pressed,x="+player_x +"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function up(){
    if (player_y>=0){
        console.log("green car x  ="+greencar_x);
		console.log("green car y="+greencar_y);
        console.log("when upp arrow is pressed,x="+player_x +"y="+player_y);
        canvas.remove(player_object);
        player_update();
		
		keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");}