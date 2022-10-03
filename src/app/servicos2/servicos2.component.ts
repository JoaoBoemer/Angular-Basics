import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servicos2',
  templateUrl: './servicos2.component.html',
  styleUrls: ['./servicos2.component.css']
})
export class Servicos2Component {
  produto="";

  constructor(public logger: LoggerService) {}

  adicionarProduto(){
    this.logger.logar(`O produto com o nome ${this.produto} foi adicionado`);
  }
}
