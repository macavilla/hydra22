solid(1, 1, 1)
.diff(
  shape(99, .451, 0).scale(1, 1, ()=>window.innerWidth / window.innerHeight )
  .mask(
    shape(1)
    .scrollY(0, -0.5).scrollX(0, ()=>Math.sin(time) )
    .modulateScale(
      osc(2, .4)
    )
    .modulateRotate(
      osc(1, .4)
    ).scale(.07)
  )
)
.out()
