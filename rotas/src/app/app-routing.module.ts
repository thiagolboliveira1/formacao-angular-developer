import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},
  //portifolio
  //portifolio/1
  //portifolio/1/abc
  {path:'portifolio',component:CardComponent, children:[
    {path:':id', component: CardComponent}
  ]},
  {path:'id:/:token', component: CardComponent},
  //full - URL Exata, URL principal colocar Full
   // URL contenha no alterações
  {path:'**', redirectTo:''} // Alternativa Rota Coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
