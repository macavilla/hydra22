noise([1, 2, 3, 2].smooth()).posterize(10)
.color(.9, .5, .6).brightness(.2)
.modulateScale(
  src(o0)
  .mask(
    shape(99, .5)
    .modulate(
      osc(7)
    )
  )
)



.out()
