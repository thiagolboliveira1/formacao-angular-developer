class CardNews extends HTMLElement {
    constructor() {
        super();
    
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-profile.jpg";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;

    }

    styles() {
        // Adicione aqui o estilo do componente
        const style = document.createElement("style");
        style.textContent = `

.card {
    width: 80%;
    border: 1px solid rgba(128, 128, 128, 0.606);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 5px 5px 25px  rgba(0, 0, 0, 0.623);
    
}

.card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}

img {
    width: 150px; /* Ajusta a largura para 200 pixels */
    /* ou */
    height: 160px; /* Ajusta a altura para 150 pixels */
  }
  
  .card__left > a {
    margin-top: 15px;
    font-size: 30px;
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

  .card__left > span {
    font-weight: 400;
  }

  .card__left > p {
    color: gray;
  }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);
