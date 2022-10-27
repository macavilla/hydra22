let githubUrl = 'https://raw.githubusercontent.com/macavilla/theythem/main/';
let imagenes = [
  githubUrl + 'fabric-canvas.jpg',
  githubUrl + 'scott-evans-f_CO1zX5g6o-unsplash.jpg',
  githubUrl + 'balva_balconsalvaje.jpg',
  githubUrl + 'alexander-ant-blYwrwEGS6I-unsplash.jpg',
]

let someShape = (sides=99, blur=0) => shape(sides, .3, blur)
.scale(1, 1, ()=>window.innerWidth/window.innerHeight)


//s0.initVideo('https://raw.githubusercontent.com/macavilla/theythem/main/vids/open-life_by-ina-vare.mp4');
s0.initVideo(githubUrl+'vids/pexels-ad-urpina-6659977.mp4')
s1.initVideo(githubUrl + 'vids/production ID 4153410.mp4');
s2.initVideo(githubUrl + 'vids/pexels-urpina-arts-7507915.mp4');


src(s2).scale(1, 1, ()=>window.innerWidth/window.innerHeight).hue( ()=>Math.sin(time)*.15 )
.modulate(osc(1))
.layer(
  someShape(2).luma()
  .modulateScale(
    noise(1, .051)
  )
  .mult(
    src(s2).scale(1, 1, ()=>window.innerWidth/window.innerHeight)//.invert( ()=>Math.sin(time)*.15 )
    .modulate(src(s2), 1.2)
  )
)

//.modulate(src(s1).modulateScale(src(s0), 2))


.out()
