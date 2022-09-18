
let rainbows = (osc = 5) => osc(osc, 0.025, 1);
let scaletowindow = () => scale(1, 1, ()=>(window.innerWidth/window.innerHeight));
a.setBins(6);
let soundwave = (bin = 0, multiplier = 10) => ( a.fft[bin] * multiplier )


shape(6, .72 , 0).rotate(11)
.scrollX( () => ( a.fft[5] * .072 ) )
.scrollY( () => ( a.fft[5] * .01 ) )
.diff(
  shape(6, .6 , 0).rotate(11)
  .scrollX( () => ( a.fft[5] * .06 ) )
  .scrollY( () => ( a.fft[5] * .01 ) )
)
.diff(
  shape(6, .5 , 0).rotate(11)
  .scrollX( () => ( a.fft[5] * .05 ) )
  .scrollY( () => ( a.fft[5] * .01 ) )
)
.diff(
  shape(6, .3 , 0).rotate(11)
  .scrollX( () => ( a.fft[5] * .03 ) )
  .scrollY( () => ( a.fft[5] * .01 ) )
  .diff(
    shape(6, .2 , 0).rotate(11)
    .scrollX( () => ( a.fft[5] * .02 ) )
    .scrollY( () => ( a.fft[5] * .01 ) )
  )
  .diff(
    shape(6, .17 , 0).rotate(11)
    .scrollX( () => ( a.fft[5] * .017 ) )
    .scrollY( () => ( a.fft[5] * .01 ) )
  )
  .diff(
    shape(6, .12 , 0).rotate(11)
    .scrollX( () => ( a.fft[5] * .012 ) )
    .scrollY( () => ( a.fft[5] * .01 ) )
  )

)
.diff(
  shape(6, () => ( a.fft[0] *.5 ), 0).rotate(11)
  //.modulateScale(noise(() => ( .1+ a.fft[0] *.05 )))

)
.modulateScale(noise(() => ( .12+ a.fft[2] *.05 )))

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


.modulateRotate(
  osc(3)
  .modulate(
    osc(2).scroll(0,.2)
  )
)

.rotate(0, -.10)
.scale(1, 1, ()=>(window.innerWidth/window.innerHeight))
//.modulateRotate(osc(.51).modulate(osc(100).kaleid(4)))
.out(o0)
