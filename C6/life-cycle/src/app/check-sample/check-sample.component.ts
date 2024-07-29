import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit, DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
{
quantidade: number = 0

  constructor() { }

  adicionar() {
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  //Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  //Após alguma alteração , verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  //Checked -> content -> view

  //Quando o primeiro conteudo é iniciado
  //Sempre será o content depois a view
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //Após alguma alteração , verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnInit(): void {
    console.log ("ngOnInit")
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend :(")
  }

}
