s0.initImage('https://64.media.tumblr.com/52b7b22cedc722e7fc3dc54c2f0a1911/0b7795d6544f3384-6a/s1280x1920/791e8f35670d7fdfe187d8ba9717dd8c00eca8be.gifv');
let gif = () => src(s0)

gif().mult(
  shape(4, 3).scale(1, innerHeight/innerWidth)
)
.out()
