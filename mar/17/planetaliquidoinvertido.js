solid(.3, 1, 1)
.diff(
  shape(99, .451).scale(1, 1, ()=>window.innerWidth / window.innerHeight )
  .mask(
    shape(1)
    .scrollY(0.3)
    .modulateScale(
      osc(5, .4).rotate(0, 0.5 )
    )
    .modulateRotate(
      noise(5, .4).scrollY(0, 0.5 )
    ).scale(.07)
  )
)
.out()
