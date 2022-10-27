let githubUrl = 'https://raw.githubusercontent.com/macavilla/theythem/main/';


let someShape = (sides=99, blur=0) => shape(sides, .3, blur)
.scale(1, 1, ()=>window.innerWidth/window.innerHeight)


s0.initVideo(githubUrl+'vids/pexels-dan-cristian-pădureț-10288594.mp4')
s1.initVideo(githubUrl + 'vids/pexels-free-creative-stuff-6766160.mp4');
s2.initVideo(githubUrl + 'vids/pexels-urpina-arts-7507915.mp4');

src(s1)
.layer(
  someShape(2).luma().rotate(Math.PI*.3)
  //.modulateScale(noise(2))
  .mult(src(s0))

)

//.modulate(src(s1).modulateScale(src(s0), 2))


.out()
