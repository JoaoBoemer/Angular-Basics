import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perso-comp',
  templateUrl: './perso-comp.component.html',
  styleUrls: ['./perso-comp.component.css']
})
export class PersoCompComponent {
  @Input() nome = ""
  @Input() sobrenome = "";
}
