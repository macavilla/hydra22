// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
osc(15,1/8).sub(
  gradient("st.x+st.y")
).rotate("st.x").scale("st.x")
  .modulateScale(osc(Math.PI+Math.E))
  .blend(o0,9/10)
  .out()
