import { Component } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { ListaGastosComponent } from '../lista-gastos/lista-gastos.component';


@Component({
  selector: 'app-detalhes-gastos',
  templateUrl: './detalhes-gastos.component.html',
  styleUrls: ['./detalhes-gastos.component.scss']
})
export class DetalhesGastosComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<ListaGastosComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
