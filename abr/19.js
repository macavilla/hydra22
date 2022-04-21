let sin = ()=>.075+Math.sin(time*.000001);

shape(99).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
.scrollY(-sin(),sin() )
.scrollX(-sin(),sin() )
.add(
  shape(2)
  .scrollY(-sin(),sin() )
  .scrollX(-sin(),sin() )

)
.sub(
  src(o0).scrollY(0, -sin())
)
.out(o0)

shape(2)
//.rotate()
.modulate(osc(3))
.out(o1)

render(o0)
