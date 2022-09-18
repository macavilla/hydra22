
let rainbows = (osc = 5) => osc(osc, 0.025, 1);
let scaletowindow = () => scale(1, 1, ()=>(window.innerWidth/window.innerHeight));
a.setBins(6)

shape(6, .52 , 0).rotate(11)
.diff(
  shape(6, .3 , 0).rotate(11)
)
.diff(
  shape(6, .27 , 0).rotate(11)
)
.diff(
  shape(6, .22 , 0).rotate(11)

  .diff(
    shape(6, .2 , 0).rotate(11)
  )

  .diff(
    shape(6, .17 , 0).rotate(11)
  )

  .diff(
    shape(6, .12 , 0).rotate(11)
  )


)
.diff(
  shape(6,  [a.fft[5] ].smooth()  , 0).rotate(11)
)
.diff(
  shape(2, .01, 0).rotate(1.574)
  .add(
    shape(2, .01, 0).rotate(.5)
    .add(
      shape(2, .01, 0).rotate(-.5)
    )
  )
)

.rotate(0, .51)
.modulateRotate(osc(.51).modulate(noise(9).kaleid(2)))
.scale(1, 1, ()=>(window.innerWidth/window.innerHeight))
.modulateRotate(osc(.51).modulate(osc(100).kaleid(4)))
.out(o0)
