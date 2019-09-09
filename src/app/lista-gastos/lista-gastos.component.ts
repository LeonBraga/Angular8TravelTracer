import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { DetalhesGastosComponent } from '../detalhes-gastos/detalhes-gastos.component';
import { GastosUsuarioService, Gasto } from '../gastos-usuario.service';


@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.scss']
})
export class ListaGastosComponent implements OnInit{

  constructor(private bottomSheet: MatBottomSheet, private gastosService: GastosUsuarioService) {}

  gastos: Gasto[];


  ngOnInit(): void {
    this.getGastos();
  }

  getGastos(): void {
    this.gastos = this.gastosService.getGastos();
  }

  openBottomSheet(): void {
    this.bottomSheet.open(DetalhesGastosComponent, {
      data: { this: this.gastos },
    });
  }
}
