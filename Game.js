class Game{
    constructor(){

    }
     getState(){
         var gameStateRef = database.ref('gameState');
         gameStateRef.on("value",function(data){
             gameState = data.val();
         })
        }
     update(state){
         database.ref('/').update({
           gameState:state
         })
     }

     async start(){
         if(gameState === 0){
             player = new Player();
             var playerCountRef = await database.ref('playerCount').once("value");
             if(playerCountRef.exists()){
                 playerCount = playerCountRef.val();
                 playerCount.getCount();
             }
             form = new Form();
             form.display();
         }

         car1 = createSprite(100,200);
         car2 = createSprite(300,200);
         car3 = createSprite(500,200);
         car4 = createSprite(700,200);
     }

     play(){
         form.hide();

         Player.getPlayerInfo();
         player.getCarsAtEnd();
         if(allPlayers !== undefined){
             background(198,135,103);

             var index = 0;

             var x = 175;
             var y;

             for(var plr in allPlayers){
                 index = index + 1;
                 x = x + 200;
                 y = displayHeight - allPlayers[plar].distance;
                 cars[index - 1].shapeColor = "red";
                 camera.position.x = displayWidth/2;
                 camera.position.y = cars[index - 1].y;
             }
         }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=10
            player.update();
        }
        
        if(player.distance > 3860){
            gameState = 2;
            player.rank = player.rank + 1;
            player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
         

     }
     end(){
         console.log("Game Over");
         console.log(player.rank);
     }

    }
     
    
     
 