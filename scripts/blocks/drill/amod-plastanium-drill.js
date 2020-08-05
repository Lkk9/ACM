const amodPlastaniumDrill = extendContent(Drill, "plastanium-drill", {
	draw(tile){
	    
	    // rotate spinners * ~ 1.2 if drill has oil
	  /*  let speedRot = 0
	    update(tile){
        if(tile.entity.liquids.total()>0){
            let speedRot = 4.5
        }else{
          let  speedRot = 3.5
        }
    this.super$update(tile)
	    }
	    
Draw.rect(rotatorRegion, tile.drawx(), tile.drawy(), entity.drillTime * rotateSpeed);

	    
	    */
        const speedRot = 3.6
	    const len = 4.5
	    
	  //bottom  
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		//spinners
		Draw.rect(Core.atlas.find(this.name + "-spinner-0"), tile.drawx() + len, tile.drawy() + len, Time.time() * speedRot)

		
    	Draw.rect(Core.atlas.find(this.name + "-spinner-1"), tile.drawx() + len , tile.drawy() - len, Time.time() * speedRot);

		Draw.rect(Core.atlas.find(this.name + "-spinner-2"), tile.drawx() - len, tile.drawy() + len , Time.time() * speedRot );
		
    	Draw.rect(Core.atlas.find(this.name + "-spinner-3"), tile.drawx() - len, tile.drawy() - len, Time.time() * speedRot);
	},
	//draw icon
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});