const hydra = new Hydra({ detectAudio: false })


//load gif
p = new P5();
p.hide();
let gif;
gif = p.loadImage('https://c.tenor.com/EWZCUGkCcIsAAAAd/old-man-my-computer.gif');
p.imageMode(p.CENTER);

p.draw = () => { p.image(gif, p.width / 2, p.height / 2); }



s0.init({ src: p.canvas })

osc().layer(src(s0)).out()


