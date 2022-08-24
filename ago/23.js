s0.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/ilus/Sandy%20Seashells/PNG/HTC_Heritage%20Library_Sandy%20SeashellsElement%205.png')

solid(1, .4, .4)
.layer(src(s0).scale(1, 1, ()=>window.innerWidth/window.innerHeight))
.modulate(osc(10), .01)
.mult(
  shape(99, .53, 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
  .modulate(osc(90).modulateRotate(noise(100)).modulateScrollX(noise(1).modulatePixelate(osc(3)), .9))
)
.layer(
  shape(99, .153, .21).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
  .scroll(0, 0, .1, ()=>-.1 + Math.sin(time/8)*.002+.1 )
).luma()
.out()
