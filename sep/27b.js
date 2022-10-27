let someShape = (sides=99, blur=0) => shape(sides, .3, blur)
.scale(1, 1, ()=>window.innerWidth/window.innerHeight)

s0.initVideo('https://raw.githubusercontent.com/macavilla/theythem/main/solen-feyissa-LvO7TJfTvOI-unsplash.jpg');
s1.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/fabric-canvas.jpg');
s2.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/scott-evans-f_CO1zX5g6o-unsplash.jpg');
s3.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/alexander-ant-blYwrwEGS6I-unsplash.jpg');

solid(1, 1, 1)
//fabric
.layer(
  src(s2).scale(1.2, 1, ()=>window.innerWidth/window.innerHeight)
  .brightness(.51)
  //.saturate(.1)
  //.hue(  )
  .modulateRotate(osc(2, .025))
)

//figuras
 .layer(
  //cyan
  someShape().luma()//.color(0, 1, 1).saturate(.5)
  .modulate(
    noise(3)
  )
  .mult(
    src(s2).modulate(src(o0))
    .hue(0)
  )
  .scroll(-.2, -.2).scale(1.75)
  //yellow
  .add(
    someShape().luma()//.color(1, 1, 0).saturate(.75)
    .modulate(
      noise(-2)
    )
    .mult(
      src(s2).modulate(src(o0))
      .hue(.7)
    )
    .scroll(0, .1).scale(1.759)
  )
  //magenta
  .add(
    someShape().luma()//.color(1, 0, 1).saturate(.8)
    .modulate(
      noise(-3)
    )
    .mult(
      src(s2).modulate(src(o0))
      .hue(.34)
    )
    .scroll(.15, -.0912).scale(1.75)


  )
  .scale(.7)
)
.modulateRotate(
  src(o0), .3
)





.out()
