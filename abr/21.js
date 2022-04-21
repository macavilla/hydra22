let sin = () => Math.sin(time)*.1;
let windowAspectRatio = () => window.innerWidth/window.innerHeight;
//let sin = ()=>.075+Math.sin(time*.000001);

solid(1, 1, 1)
.mult(
  //amarilla
  shape(99, .3, 0).scale(1, 1, windowAspectRatio()).color(1, 1, 0)
  .scrollX(.5, -sin())
  .scrollY(.5, -sin())
  .add(
    shape(99, .3, 0).scale(1, 1, windowAspectRatio()).color(0, 1,1)
    .scrollX(.5, -sin())
    .scrollY(.5, sin())
  )
  .add(
    shape(99, .3, 0).scale(1, 1, windowAspectRatio()).color(1, 0, 1)
    .scrollX(.5, sin())
    .scrollY(.5, -sin())
  )
)

.out()
