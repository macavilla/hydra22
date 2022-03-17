
osc(Math.PI*2, .025, Math.PI*2 *.79).posterize(10)
  .modulateScrollX(
    voronoi(55, .5).pixelate(100, 100)
    .mask(
      shape(200, 0.25, .15).modulateRotate(osc(.5))
    )
  ).invert()
//.kaleid(3)
  .scale( 1,1,()=>window.innerWidth/window.innerHeight )
  .out(o0)
