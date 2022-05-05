

shape(99, .02, 0)
.scrollX(0, ()=>Math.sin(time* .00001) )
.rotate(0, ()=>Math.sin(time* .00001) )
.scale(.2)
.diff(
  shape(2, .30).modulateScale(osc(2))
)
.modulateScale(
  noise(.3, .001)
).out()
