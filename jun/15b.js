let someShape = (sides=99, blur=.15) => shape(sides, .3, blur).scale(1, 1, ()=>window.innerWidth/window.innerHeight)

someShape()//.scrollX(-.2, .051).scrollY(0, .02)
.color(.7, [.5, .6, .4].smooth(), .7)
.modulate(
  osc(10).rotate(.2, .1)
)
.modulateRepeat(noise(1).modulateScale(osc(7)), 3, 7).rotate(0, .13)
.add(
  someShape().scrollX(.234, .01).scrollY(-.2, .01)
  .color(.3, .3, [.8, .6, .9].smooth())
  .modulate(
    osc(7)
  )
  .modulate(noise(3)).modulate(osc(2))
)
.add(
  someShape(2, .075).color(.4, .7, 1).scale(.4).rotate(0, .001)
  .modulateScale(osc(1))
  .modulateRotate(noise(1))
)
.out()
