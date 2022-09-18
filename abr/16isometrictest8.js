
let rainbows = (osc = 5) => osc(osc, 0.025, 1);
let scaletowindow = () => scale(1, 1, ()=>(window.innerWidth/window.innerHeight));
a.setBins(6);
let soundwave = (bin = 0, multiplier = 10) => ( a.fft[bin] * multiplier )


shape(6, .72 , 0).rotate(11)
.rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .00072 ) )
.diff(
  shape(6, .6 , 0).rotate(11)
  .rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .0006 ) )
)
.diff(
  shape(6, .5 , 0).rotate(11)
  .rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .0005 ) )
)
.diff(
  shape(6, .22 , 0).rotate(11)
  .rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .00022 ) )
  .diff(
    shape(6, .2 , 0).rotate(11)
    .rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .0002 ) )
  )
  .diff(
    shape(6, .17 , 0).rotate(11)
    .rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .00017 ) )
  )
  .diff(
    shape(6, .12 , 0).rotate(11)
    .rotate( 0, () => ( a.fft[5] *.000125 + a.fft[5] * .00012 ) )
  )

)
//circulo
.mult(
  shape(66, () => ( a.fft[0] *.5+.43 ), 0).rotate(11)
  //.modulateScale(noise(() => ( .1+ a.fft[0] *.05 )))

)
.modulateScale(noise(() => ( .12+ a.fft[0] *.05 )))

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


.modulateRotate(osc(3).modulate(osc(9).kaleid(2)))

.rotate(0, -.10)
.scale(1, 1, ()=>(window.innerWidth/window.innerHeight))
//.modulateRotate(osc(.51).modulate(osc(100).kaleid(4)))
.out(o0)
