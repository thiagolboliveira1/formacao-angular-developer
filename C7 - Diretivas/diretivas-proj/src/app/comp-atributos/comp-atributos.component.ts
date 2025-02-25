import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  style:string = "enable"
  corFundo:string = "red"
  corDaFonte:string = "pink"
  item:string = ""
  lista:string [] = []
  isEnableBlock:boolean = true

  constructor() { }

  adicionarLista(){
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }
  trocar(){
    if(this.style === "disable"){
      this.style = "enable"
    }else{
      this.style = "disable"
    }}
}
