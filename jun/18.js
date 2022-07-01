let someShape = (sides=99, blur=.15) => shape(sides, .3, blur).scale(1, 1, ()=>window.innerWidth/window.innerHeight)

someShape(99, 0)
.color(.9, .1, .1)
//.modulate(osc(10))
//.modulateRepeat(noise(1).modulateScale(osc(7)), 3, 7).rotate(0, .013)
.add(
  someShape(4, 0).scale(2, 1).scrollX(.4, .01).scrollY(-.2, .01)
  .color(.2, 0, 0).invert()
  //.modulate(noise(3)).modulate(osc(20))
)
.sub(
  someShape(2, 0).color(.4, .7, 1).invert()//.scale( ()=>Math.sin(time*.02)*.5 ).rotate(0, .01)
  //.modulateScale(osc(1))
  //.modulateRotate(noise(1))
)
.out()
