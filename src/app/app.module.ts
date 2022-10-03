import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firstcompComponent } from './firstcomp/firstcomp.app';
import { SeccompComponent } from './seccomp/seccomp.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { PersoCompComponent } from './perso-comp/perso-comp.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { Servicos1Component } from './servicos1/servicos1.component';
import { Servicos2Component } from './servicos2/servicos2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    firstcompComponent,
    SeccompComponent,
    MultiplicaPorPipe,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    PersoCompComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    Servicos1Component,
    Servicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
