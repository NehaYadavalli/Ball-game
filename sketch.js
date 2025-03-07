var ball_img,img,paddle_img;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png");

}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(100,200);
  ball.addImage("ball",ball_img);
  
  paddle=createSprite(350,200);
  paddle.addImage("paddle",paddle_img);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
ball.bounceOff(edges[3]) || ball.bounceOff(edges[2]) || ball.bounceOff(edges[0]);
 

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle, randomVelocity);
  
     
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
 
    ball.velocityY=random(-5,5);
    
  


}
