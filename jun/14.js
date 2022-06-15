let stripes = ()=>osc().posterize([12, 6, 7, 8, 9].smooth()).thresh()
let myShape = (sides)=>shape(sides, .5, .03).scale(1, 1, ()=>window.innerWidth/window.innerHeight)


myShape(99).color(.7, .2, [.3, .7, .4, .1].smooth())
.modulateRotate(
  osc(10).rotate( ()=>Math.sin(time) *.7, .1)
)
.modulate(noise(3))
.mask(myShape(4))
.add(
  stripes()
  .diff(stripes().rotate(.7))
  .modulate(osc(7).modulate(myShape([4, 2, 2, 2, 3, 99].smooth()).pixelate(100, 100)))
  //.modulateScale(src(o0))
)
.out()
