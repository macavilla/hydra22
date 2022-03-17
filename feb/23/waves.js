shape(2)
.modulate(
  osc(1, 0.5)
).repeat(1, 50)
.diff(
  shape(2).modulate(
    osc(-7, 0.5)
  ).repeat(1, 47)
)
.mult(
  shape(2).modulate(
    osc(7, 0.25)
  )
)
.diff(
  shape(2).modulate(osc(-2, -.75).scrollY(0.9, 0.95))
)
.out()
