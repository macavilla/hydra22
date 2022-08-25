s0.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/ilus/Sandy%20Seashells/PNG/HTC_Heritage%20Library_Sandy%20SeashellsElement%208.png')

let seashell = ()=> src(s0).scale(.51, 1, ()=>window.innerWidth/window.innerHeight).mask(shape(99, .199, 0).scale(2.2, 1.2, 1.75))

solid(.1, .5, .43)
.add(
  shape(4,.1).rotate(0,.2)
  .modulateRepeat(osc(50).modulate(src(o0)))
  .scroll(0, 0, .02, -.09).rotate(()=>Math.sin(time*.2))
)

.layer(
  shape(2).modulate(osc(22).modulateScale(seashell().diff(seashell())).modulateRotate(voronoi(9999)))
)



.blend(
  shape(99, .97).scale(.51, 1, ()=>window.innerWidth/window.innerHeight)
  .color(.07, .4, .458)
  .modulateScale(osc(6))
  .modulateRotate(
    osc(50).modulateScrollX(voronoi(9)).modulateScrollX(osc(999))
  )
)

.layer(
  seashell()
  .modulate(
    osc(3).modulate(noise(5))
  )
)

/* .modulate(osc(10), .01)
.mult(
  shape(99, .53, 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
  .modulate(osc(90).modulateRotate(noise(100)).modulateScrollX(noise(1).modulatePixelate(osc(3)), .9))
)
.layer(
  shape(99, .153, .21).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
  .scroll(0, 0, .1, ()=>-.1 + Math.sin(time/8)*.002+.1 )
).luma()*/
.out()
