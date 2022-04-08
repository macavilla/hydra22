let globe = (size) =>  shape(99,size,.004).scale(1,1,()=>window.innerWidth/window.innerHeight);

osc(40, 0.01, .0).rotate(1.57).posterize(2.5)
.mask(
  shape(2, .5).scrollY(.24)
).add(
  globe(.599999).sub(globe(.59)).add(globe(.58))
, 1)

.layer(
  osc(2, -.1).color(.4, 0, .6).saturate(.4).rotate(1.57).posterize(9)
  .modulate(shape(3))
  .mask(shape(2, .5)).scrollY(-.25)
)
.add(
  shape(3, .3, 0).rotate(1.05).scrollY(-.309).scale(1.4, 2, 1)
  .sub(shape(3, .29, 0).rotate(1.05).scrollY(-.309).scale(1.4, 2, 1))
  .add(
    shape(3, .29, 0).color(.01, .01, .01).rotate(1.05).scrollY(-.309).scale(1.4, 2, 1)
  ).sub(shape(3, .27, 0).rotate(1.05).scrollY(-.309).scale(1.4, 2, 1))
)
.out()
