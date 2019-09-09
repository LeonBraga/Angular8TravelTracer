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

  gastos: Gasto[];

  constructor(private bottomSheet: MatBottomSheet, private gastosService: GastosUsuarioService) {}

  openBottomSheet(): void {
    this.bottomSheet.open(DetalhesGastosComponent);
  }

  getGastos(): void {
    this.gastos = this.gastosService.getGastos();
  }

  ngOnInit(): void {
    this.getGastos();
  }

}
