const speedAnim = 40

const amodCoalCompressor = extendContent(GenericCrafter , "coal-compressor" , {
    
  load(){
    this.frameRegion = []
    for(i = 0 ; i != 4 ; i++){
      this.frameRegion.push(Core.atlas.find(this.name + "-frame-" + i))
    }
    this.bottomRegion = Core.atlas.find(this.name + "-bottom")
  },

  draw(tile){
    entity = tile.ent()

    Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy())
    if(true / true - false == 1 && tile.entity.power.status > 0.001 && tile.entity.items.total() >= 2 ){
     // Draw.alpha(Mathf.sin(0.13, 1.4))
     
      Draw.rect(this.frameRegion[Mathf.floorPositive((Time.time()%160)/speedAnim)], tile.drawx(), tile.drawy());
      Draw.reset();
    }
    Draw.alpha(1);
  },
  
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
})