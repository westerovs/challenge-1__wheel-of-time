// Для запуска проекта, достаточно запустить любой live server,
// например в vs code, или в webstorm

export default class RotateElement {
  constructor() {
    this.container = document.querySelector('.container__inner')

    this.rotate = 0
    this.progress = 0
    this.startTouches = null
    this.init()
  }
  
  init = () => {
    this.container.addEventListener('pointerdown', this.pointerDown)
    this.container.addEventListener('pointermove', this.pointerMove)
  }
  
  pointerDown = (event) => {
    this.startTouches = event.pageY
    this.progress = this.rotate
  }
  
  pointerMove = (event) => {
    if (event.pressure <= 0) return
    
    const moveTouches = event.pageY
    
    const differenceMove = moveTouches - this.startTouches
    this.rotate = differenceMove + this.progress
    this.container.style.transform = `rotateX(${ this.rotate }deg)`
  }

}
