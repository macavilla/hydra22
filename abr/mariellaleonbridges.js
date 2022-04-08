let globe = (size) =>  shape(99,size,.004).scale(1,1,()=>window.innerWidth/window.innerHeight);

//cielo
//osc(40, .05, .0).rotate(1.57).posterize(2.5)
osc(2, .05).rotate(1.57).posterize(9)

//estrellas
.add(
  shape(4, .12).rotate(.59).repeat(20, 10).modulate(noise(2))
  .add(
    shape(99, .12).repeat(16, 13).modulate(osc(-1))
  )
  .mask(
    shape(2, .1, .5).scrollY(.4)
  )
  //.modulate(osc(1, .25, .6).modulate(noise(15)))
)
.mask(
  shape(2, .5).scrollY(.2)
).add(
  //luna
  globe(.599999).sub(globe(.59)).add(globe(.58)).scale(.789)

  .scrollY(0, .0245)
, 1)

//suelo
.layer(
  //osc(2, -.05).rotate(1.57).posterize(9)
  osc(40, -.05, .0).rotate(1.57).posterize(2.5)

  .mask(shape(2, .5)).scrollY(-.25)
)
//ruta
.add(
  shape(3, .3, 0).rotate(1.05).scrollY(-.29).scale(1.4, 2, 1)
  .sub(shape(3, .29, 0).rotate(1.05).scrollY(-.29).scale(1.4, 2, 1))
  .add(
    shape(3, .29, 0).color(.01, .01, .01).rotate(1.05).scrollY(-.25).scale(1.4, 2, 1)
  ).sub(shape(3, .27, 0).rotate(1.05).scrollY(-.275).scale(1.4, 2, 1))

)

.out()
