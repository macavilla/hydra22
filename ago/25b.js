let fondo = ()=> osc(7, .012).posterize(15).color(.7, .45,.45)
fondo()
.add(
  fondo().scroll().modulateRotate(noise(999))
)
.add(fondo().scrollX(0, 0, 1, .1))
.layer(
  shape(99, [.2].smooth().fast(.002), 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight).luma()
  .modulateRotate(noise(3))
  .modulateScale(
    osc(2).modulateScale(osc(3))
  ).color(.45, .45, .7)
)
.layer(
  shape(4, .43, 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight).luma()
  .color(.7, .42, .4).brightness([.2, .4].fast(.12))
  .rotate(()=>Math.sin(time)*.01)
  .modulate(
    osc(12, .02).diff(osc(2)).scale(2)
  ).scroll(.2, 0, ()=>Math.sin(time)*.00001251, ()=>Math.sin(time)*.0000075)
  .modulateScrollX(fondo())
)
//.layer(fondo().layer(fondo()).luma())
.out()
