class CustomButton extends HTMLElement {
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        button {
          display: block;
          color: white;
          border: none;
          border-radius: var(--button-border-radius);
          background-color: var(--dawn);
          width: var(--button-width);
          height: var(--button-height);
        }
      </style>

      <button>Botão Sombrio</button>
    `
  }
}

customElements.define('custom-button', CustomButton)