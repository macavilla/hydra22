
let blob = (size = .3, noiseValue = 4)=> shape(99, size, 0).scale(1,1,innerWidth/innerHeight).modulate(noise(noiseValue))

solid(.39, .87, .87)
.layer(blob(.7, 999).luma().modulate(noise(999, .0013)))
.layer(
  blob(.4).luma().color(.45, 0, .71)
  .layer(
    blob(.3).luma().color(.28, .74, .88)
  )
  .layer(
    blob(.2).luma().color(.36, .36, .80)
  )
)


.out()
