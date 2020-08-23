if (typeof(floatc2)== "undefined"){
  const floatc2 = method => new Floatc2(){get : method}
}

const ironKilnFx= newEffect(15, e => {
  Draw.color(Color.white, Color.valueOf("454566"), e.fout());
  Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, floatc2((x,y) => {
    Fill.circle(e.x + x, e.y + y, 0.5 + e.fout() * 2);
  }));
});

	

const amodIronKiln = extendContent(GenericCrafter , "iron-kiln" , {
    
})

amodIronKiln.updateEffect = ironKilnFx