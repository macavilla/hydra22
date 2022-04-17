//punto
shape(99, .01, 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight)
//linea
.scale(2, 99)
.rotate(0, ()=>Math.sin(time * .001))

.scale(12, 2)
.modulateRotate(osc(2))
.scale(.2)
//
// .repeat(9, 9)
// .rotate(0, ()=>Math.sin(time * .0002))
// .repeat(3, 2)
// .scrollY(()=>Math.sin(time * .02))


.out()
