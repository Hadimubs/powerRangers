var canvas=new fabric.Canvas("myCanvas")
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var playerObject= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image,function(img){
        playerObject=img;
        playerObject.scaleToWidth(block_image_width);
        playerObject.scaleToHeight(block_image_height);
        playerObject.set({
        top:block_y,
        left:block_x
        });
        canvas.add(playerObject);	
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image("rr.jpg");
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image("gr.png");
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
		console.log("y");
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
		console.log("p");
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png");
		console.log("b");
	// upload blue ranger
	}
	
}

