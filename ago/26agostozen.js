let lines = ()=> shape(2, [.1], 0).luma()

solid(.7, .2,.187).brightness(.5691)
/*.layer(
  solid(.6, .2,.7)
  .layer(lines().scroll(0, .2).layer(lines().scroll(0, -.2)).layer(lines().scroll(0, .2).rotate(Math.PI/2)).layer(lines().scroll(0, 0).rotate(Math.PI/2)).repeat([5,4,3,2,1,2,3,4].smooth(.5), [1,2,3,4,5,4,3,2].smooth(.09)))
  .scale(.2)
  //.modulate(lines().modulate(noise(999)))
  .mask(shape(4,.75)).modulateScale(osc(4).modulate(lines().rotate(Math.PI/2)))

)*/
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
    shape(99, .4,0).luma().scale(1,1,innerWidth/innerHeight).color(1,1,1).color(.78, .2,.18).brightness(.5691)
    //.scrollX(0, .01, .01,.2)
    .modulate(osc(3, .024).modulateScale(noise(3, .002).modulateScale(src(o0).kaleid(10))))
).scale(1, innerWidth/innerHeight).repeat(4)
.layer(
  lines().modulate(osc(2).modulate(noise(3)))
)
.out()
