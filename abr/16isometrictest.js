let rainbows = () => osc(Math.PI * 5, 0.025, 1);
let scaletowindow = () => scale(1, 1, ()=>(window.innerWidth/window.innerHeight));


shape(6, .52 , 0).rotate(11)
.diff(
  shape(6, .3 , 0).rotate(11)
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
.scale(1, 1, ()=>(window.innerWidth/window.innerHeight))

.out(o0)
