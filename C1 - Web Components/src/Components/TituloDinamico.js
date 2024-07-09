class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        // Criar a Shadow DOM
        const shadow = this.attachShadow({ mode: "open" });

        // Base do component <h1>Thiago</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("");
        
        // Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;
        
        // Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
