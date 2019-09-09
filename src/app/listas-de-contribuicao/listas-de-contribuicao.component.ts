import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-listas-de-contribuicao',
  templateUrl: './listas-de-contribuicao.component.html',
  styleUrls: ['./listas-de-contribuicao.component.scss']
})

export class ListasDeContribuicaoComponent {

  // foods: Food[] = [
  //   { value: "steak-0", viewValue: "Steak" },
  //   { value: "pizza-1", viewValue: "Pizza" },
  //   { value: "tacos-2", viewValue: "Tacos" }
  // ];

}
