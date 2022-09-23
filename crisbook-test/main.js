const hydra = new Hydra({ detectAudio: false })

s0.initImage('https://raw.githubusercontent.com/macavilla/theythem/main/crisbookcopy.png')

//let perspectiva = ()=>

solid(.01, .1, .15)
.layer(
  shape(4, .3, 0).luma()
  .color(.27,.51,.54)
  .scale(1, innerHeight / innerWidth)
  .modulateScale(
    noise(2).modulateKaleid(noise(1))
  )
)
.layer(
  shape(4, .29, 0).luma()
  .color(.47,.67,.64)
  .modulateScale(
    noise(1).modulateKaleid(noise(1))
  )
)
.layer(
  shape(4, .12, 0).luma()
  .color(.96,.91,.8)
  //.scale(1, innerHeight / innerWidth)
  .modulateScale(
    noise(1)
    .modulate(
      shape(2).modulate(osc())
    )
    .modulateKaleid(noise(1))
  )
)
//.scroll(0, 0, ()=>Math.sin(-time)*.0001, ()=>Math.sin(time)*.0025)
.scale(.7)
.modulate(
  src(o0).modulate(osc(4).thresh())//, 0, 0
).rotate(.01)
//crisbook
.layer(
    src(s0)
)
    .out()
