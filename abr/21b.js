let sin = ()=>.075+Math.sin(time*.000001);

shape(99).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
.scrollY(-sin(),sin() )
.scrollX(-sin(),sin() )
.add(
  shape(2)
  .scrollY(-sin(),sin() )
  .scrollX(-sin(),-sin() )
)
.sub(
  src(o0).scrollY(0, -sin())
)
.out(o0)

shape(2, .12)
.scrollX(0, -sin())
.rotate(0, sin()).rotate(0, -sin())
.modulate(osc(10, .070).rotate(.2, .3))
.modulateRotate(osc(sin()*10, -.07).rotate(.5, -sin()))
.out(o1)

render(o1)
