var uno, dos;

function setup() {
  createCanvas(800,400);
  uno = createSprite(400, 200, 50, 50);
  dos = createSprite(300,300,100,70);
  uno.shapeColor="green";
  dos.shapeColor="green";
  uno.debug=true;
  dos.debug=true;
}

function draw() {
  background(255,255,255); 
  console.log(uno.x-dos.x); 
  dos.x=World.mouseX; 
  dos.y=World.mouseY; 

  if(uno.x-dos.x <uno.width/2+dos.width/2 
    //Alumno, hacer que cambie de color a rojo en la colisión de arriba y abajo 
    && dos.x-uno.x <uno.width/2+dos.width/2
    && uno.y-dos.y <uno.height/2+dos.height/2
    && dos.y-uno.y <uno.height/2+dos.height/2

    ) { 
      dos.shapeColor = "red"; 
      uno.shapeColor = "green"; 
    }
     else{ 
     uno.shapeColor = "green"; 
     dos.shapeColor = "green"; 
    }
  drawSprites();
}