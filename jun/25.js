let someShape = (sides=99, blur=.15) => shape(sides, .3, blur).scale(1, 1, ()=>window.innerWidth/window.innerHeight)

someShape(99)
.color(.7, .4, .6)
.modulate(
  noise([4, 2].fast(.2).smooth(), .05)
).add(
  someShape(2).scale(.2).color(.3, .3, .7)
  .modulateRotate(
    osc(4).rotate(2, .02)
  )
)

.out()
