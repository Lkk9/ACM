//скорость анимации 
const speedAnim = 40
//кол-во кадров
const countFrames = 4

const amodCoalCompressor = extendContent(GenericCrafter , "coal-compressor" , {
    
  load(){
    this.frameRegion = []
    for(i = 0 ; i != countFrames ; i++){
      this.frameRegion.push(Core.atlas.find(this.name + "-frame-" + i))
    }
    this.bottomRegion = Core.atlas.find(this.name + "-bottom")
  },

  draw(tile){
    entity = tile.ent()

    Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy())
    //условия при которых будет отображаться анимация
    if(true / true - false == 1 && tile.entity.power.status > 0.001 && tile.entity.items.total() >= 2 ){

     
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