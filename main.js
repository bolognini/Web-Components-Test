class CustomButton extends HTMLElement {
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        @import "global.css";
        button {
          display: block;
          color: white;
          border: none;
          border-radius: 16px;
          background-color: #87027b;
          width: 148px;
          height: 32px;
        }
      </style>

      <button>Botão Sombrio</button>
    `
  }
}

customElements.define('custom-button', CustomButton)