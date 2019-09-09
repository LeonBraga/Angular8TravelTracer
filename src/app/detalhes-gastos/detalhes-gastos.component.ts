import { Component, Inject } from "@angular/core";
import { MatBottomSheetRef, MatBottomSheet } from "@angular/material";
import { ListaGastosComponent } from "../lista-gastos/lista-gastos.component";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material/bottom-sheet";
import { GastosUsuarioService, Gasto } from "../gastos-usuario.service";

@Component({
  selector: "app-detalhes-gastos",
  templateUrl: "./detalhes-gastos.component.html",
  styleUrls: ["./detalhes-gastos.component.scss"]
})
export class DetalhesGastosComponent {
  constructor(
    // tslint:disable-next-line: max-line-length
    private bottomSheetRef: MatBottomSheetRef<ListaGastosComponent>,
    private gastosService: GastosUsuarioService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    console.log("Resultado", this.teste);
  }

  teste: Gasto[] = this.data;
  // gastos: Gasto[];

  // gastoFiltrado: Gasto[];

  // getGastos(): void {
  //   this.gastos = this.gastosService.getGastos();
  // }

  // getGastosFiltrado(gastoId: string) {
  //   return this.gastos.filter(gasto => gasto.id.match(gastoId));
  // }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
