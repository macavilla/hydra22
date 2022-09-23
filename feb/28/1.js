osc(30, .05, 0.5).posterize(-3)
.modulate(
  osc(15, .05).thresh().rotate(1.5)
)
.diff(
  osc(99, .0001, .975).luma(.5, .9)
  .modulateRotate(
    noise(1000)
  )
)

.out(o0)
