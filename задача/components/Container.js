import RotateElement from './Rotate.js';

export default class Container {
  constructor() {
    this.container = document.querySelector('.container__inner')
    this.PARTS_COUNT = 24
    
    this.initRotate = 35
    this.currentRotate = this.initRotate
    this.init()
  }

  init() {
    this.render()
    new RotateElement()
  }

  getTemplate = (time, rotate) => {
    return `
      <div class="container__item" style="transform: rotateX(${rotate}deg) translateZ(100px);">
        <div class="container__item-row">
          <span class="container__item-row-item container__item-row-item--hour">${time}</span>
          <span class="container__item-row-item container__item-row-item--separator">:</span>
          <span class="container__item-row-item container__item-row-item--minute">00</span>
        </div>
      </div>`
  }

  render() {
    let timeCounter = 1

    for (let i = 0; i < this.PARTS_COUNT; i++) {
      if (this.container instanceof Element) {
        this.container.insertAdjacentHTML('beforeend', this.getTemplate(timeCounter, this.currentRotate))
      }

      timeCounter++
      this.currentRotate -= 15
    }
  }
}
