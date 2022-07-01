osc(2, .1, [.5, .4, .7, .9, 1, 1.25].smooth()).posterize(5)
.modulateRotate(
  noise(1)
)
.color(.9, .4, .7)
.add(
  shape(99, .53, 0).scale(.71, 1.5, ()=>window.innerWidth/window.innerHeight)
  .mult(
    src(o0)
  )
  //.color(.51, .1, .91)
  .modulateScale(
    noise(2, .02)
  )
)
//.invert([.7, 1].smooth().fast(.2))

// .modulate(
//   osc().posterize(7).rotate(0, .2)
// )
.out()
