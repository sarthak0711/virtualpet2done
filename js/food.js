class Food{

    constructor(){
        this.foodStock=0
        this.lastFed=0
    }

    display(){
        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed: "+lastFed%12 + "PM", 350,30 );
        }else if(lastFed==0){
            text("Last Fed : 12 AM",350,30);
        }else{
            text("Last Feed ; "+lastFed + "AM",350,30);
        }
    }

    getFoodStock(){
       var foodRef = db.ref('food')
       foodRef.on('value',function(data){
           this.foodStock = data.val();
       })

    }

    updateFoodStock(foodCount){
        var updateRef = db.ref('/')
        updateRef.set({
            food:foodCount,
            lastFed:this.lastFed
        })

    }

    deductFood(){
        
    }

}