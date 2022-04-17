let punto = () => shape(99, .01, 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight)

//punto a línea por escala
punto().scale(1, 120)

//linea a plano
.scrollY(.1, .1)
.out()
