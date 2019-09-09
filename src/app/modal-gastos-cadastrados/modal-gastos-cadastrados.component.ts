import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { DetalhesGastosComponent } from '../detalhes-gastos/detalhes-gastos.component';


@Component({
  selector: 'app-modal-gastos-cadastrados',
  templateUrl: './modal-gastos-cadastrados.component.html',
  styleUrls: ['./modal-gastos-cadastrados.component.scss']
})
export class ModalGastosCadastradosComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<DetalhesGastosComponent>
    // private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
