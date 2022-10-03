import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccomp',
  templateUrl: './seccomp.component.html',
  styleUrls: ['./seccomp.component.css']
})
export class SeccompComponent {
  nome = "João"
  dataNascimento = "2002-07-23";
  urlImg = "/assets/peng.png"

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`)
  }
}
