let someShape = (sides=99, blur=0) => shape(sides, .3, blur)
.scale(1, 1, ()=>window.innerWidth/window.innerHeight)


s0.initVideo('https://raw.githubusercontent.com/macavilla/theythem/main/vids/open-life_by-ina-vare.mp4');
s1.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/fabric-canvas.jpg');
s2.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/scott-evans-f_CO1zX5g6o-unsplash.jpg');
s3.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/alexander-ant-blYwrwEGS6I-unsplash.jpg');

src(s3).scale(1.5, 1, ()=>window.innerWidth/window.innerHeight)
.hue( [.1,.2].smooth() )
.modulateScrollX(src(s0).luma().modulate(src(s3)), ()=>.1+mouse.x/width )
.layer(
  someShape().scale(2).luma()
  .modulate(voronoi(3))
  .mult(
    src(s0).modulateRotate(noise(1))
  )
)


.out()
