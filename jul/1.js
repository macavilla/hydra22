osc(2, .1, [.5, .4, .7, .9, 1, 1.25].smooth()).posterize(5)
.modulate(
  noise(1)
)
.color(.9, .4, .7)
.add(
  shape(3, [.3, .5, .9].smooth(), 0).scale(.71, 1.5, ()=>window.innerWidth/window.innerHeight)
  .sub(
    src(o0)
  )
  //.color(.51, .1, .91)
  .modulateScale(
    noise(2, .2)
  )
)
//.invert([.7, 1].smooth().fast(.2))

// .modulate(
//   osc().posterize(7).rotate(0, .2)
// )
.out()
