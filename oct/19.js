//copiado de sendcodigo grupo de clic
s0.initImage("https://images.pexels.com/photos/11055160/pexels-photo-11055160.jpeg")
s1.initImage("https://images.pexels.com/photos/9700586/pexels-photo-9700586.jpeg")

osc()

  .out(o1)

src(s1)
.modulate(o1,[0.2,0,1,0,0.5,0.05,0.3].smooth())
.modulateScale(osc().rotate(Math.PI/2),[0.2,0,1,0.001,0,0.5,0.05,0.3].smooth())
.out()
