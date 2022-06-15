solid(.7, .4, .4)
.add(
  shape(99, .5,0).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
  .modulateScale(
	noise([1, 2, 1, 1].smooth().fast(.12))
)
)
.modulate(
  shape(99)//.scale(1, 1, ()=>window.innerWidth/window.innerHeight)
  .modulateScrollX(
	noise(2).modulate(osc(4))
  )
)
  .out()
