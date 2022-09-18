
let rainbows = (osc = 5) => osc(osc, 0.025, 1);
let scaletowindow = () => scale(1, 1, ()=>(window.innerWidth/window.innerHeight));
a.setBins(6);
let soundwave = (bin = 0, multiplier = 10) => ( a.fft[bin] * multiplier )


shape(6, .72 , 0).rotate(11)
.diff(
  shape(6, .6 , 0).rotate(11)
)
.diff(
  shape(6, .5 , 0).rotate(11)
)
.mult(
  shape(6, .4 , 0).rotate(11)
  .diff(
    shape(6, .32 , 0).rotate(11)
  )
  .diff(
    shape(6, .2 , 0).rotate(11)
  )
  .diff(
    shape(6, .12 , 0).rotate(11)
  )

)
.diff(
  shape(6, () => ( a.fft[0] *.5 + .37 ), 0).rotate(11)
  //.modulateScale(noise(() => ( .1+ a.fft[0] *.05 )))

)
//.modulateScale(noise(() => (  a.fft[0] *1 )))

//.modulateRotate(noise(() => ( a.fft[0] *.005 )))

//lines
.diff(
  shape(2, .01, 0).rotate(1.574)
  .add(
    shape(2, .01, 0).rotate(.5)
    .add(
      shape(2, .01, 0).rotate(-.5)
    )
  )//.rotate(0, .1)
)


.modulateRotate(osc(3).kaleid(9).modulate(osc(19)))

.rotate(0, -.10)
.scale(1, 1, ()=>(window.innerWidth/window.innerHeight))
//.modulateRotate(osc(.51).modulate(osc(100).kaleid(4)))
.out(o0)
