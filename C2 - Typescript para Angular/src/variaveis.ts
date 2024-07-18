
/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "thiago";
let idade: number = 28;
let altura: number = 1.7;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
  name: "thiago",
  cidade: "pr",
  idade: 28,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

/**
 * arrays
 */

let dados: string[] = ["thiago", "ana", "adriana"];
let dados2: Array<string> = ["thiago", "ana", "adriana"];

let infos: (string | number)[] = [322, "thiago"];

/**
 * Tuplas
 */
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("1995-12-09 09:10");
console.log(aniversario.toString());
