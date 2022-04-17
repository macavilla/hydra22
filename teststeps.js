//la idea es mover un punto en tramos
//funciones a invocar dentro de cada paso
let punto = () => shape(99, .01, 0).scale(1, 1, ()=>window.innerWidth/window.innerHeight)

//defino y ordeno los pasos
let paso0 = () => punto()
let paso1 = () => punto().scrollX(.45).scrollY(0)
let paso2 = () => punto().scrollX(.45).scrollY(.25)

let steps = [
  paso0(), paso1(), paso2()
]

let handleSteps = () => {
  let currentStep = 0;
  currentStep == 0 ? currentStep++ : currentStep 0
  return currentStep;
}



update = ()=> handleSteps() ;


steps[2]
.out()
