let lines = ()=> shape(2, [.1], 0).luma()

solid(.7, .2,.187).brightness(.5691)
.layer(
  shape(99, .73,0).luma().scale(1,1,innerWidth/innerHeight).color(.2, .5, .97)
  .modulate(noise(2, .012)).modulate(osc(10, .002))
  .modulateRotate(lines().modulate(noise(999).scroll(0,0,.0001,.00002)))
  .modulate(lines().rotate(Math.PI/2))
)
.layer(
  shape(99, .5,0).luma().scale(1,1,innerWidth/innerHeight).color(.4, .65, .97)
  //.scrollX(0, .01, .01,.2)
  .modulate(osc(4, .024).modulateScale(noise(3, .002).modulateScale(src(o0).kaleid(10))))
)
.layer(
    shape(99, .4,0).luma().scale(1,1,innerWidth/innerHeight)
    .color(1,1,1).color(.78, .2,.18).brightness(.5691)
    //.scrollX(0, .01, .01,.2)
    .modulate(osc(3, .024).modulateScale(noise(3, .002).modulateScale(src(o0).kaleid(10))))
).scale(1, innerWidth/innerHeight).repeat(4)

.layer(
  //solid(.7, .2,.187).brightness(.5691)
  shape(99, .451, 0).luma().scale(1, 1, ()=>window.innerWidth / window.innerHeight)
  .mult(
    solid(.7, .2,.187).brightness(.4691)
    .layer(
      shape(99, .3451, 0).luma().scale(1, 1, ()=>window.innerWidth / window.innerHeight)
      .mult(
        solid(.4, .65, .97)
      )
      .mask(
        shape(1, .12)
        .modulateScale(osc(1, .94))
        .modulateRotate(osc(1, .3)).scale(.057)
      )
    )
    .layer(
      shape(99, .13451, 0).luma().scale(1, 1, ()=>window.innerWidth / window.innerHeight)
      .mult(
        solid(1,1,1).color(.78, .2,.18).brightness(.31)
      )
      .mask(
        shape(1, .0012)
        .modulateScale(osc(1, .94))
        .modulateRotate(osc(1, .3)).scale(.057)
      )
    )
  ).modulateScale(noise(999)).scale(2)
  .mask(
    shape(1)
    .modulateScale(osc(1, .94))
    .modulateRotate(osc(1, .3)).scale(.057)
  )
)

.out()
