import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasDeContribuicaoComponent } from './listas-de-contribuicao/listas-de-contribuicao.component';

import {MatNativeDateModule} from '@angular/material/core';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { MatExpansionPanel } from '@angular/material/expansion';
import { AbasComponent } from './abas/abas.component';
import { ListaGastosComponent } from './lista-gastos/lista-gastos.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BotatoAddPrincipalComponent } from './botato-add-principal/botato-add-principal.component';
import { ModalGastosCadastradosComponent } from './modal-gastos-cadastrados/modal-gastos-cadastrados.component';
import { DetalhesGastosComponent } from './detalhes-gastos/detalhes-gastos.component';



@NgModule({
  declarations: [
    AppComponent,
    ListasDeContribuicaoComponent,
    NavegacaoComponent,
    AbasComponent,
    ListaGastosComponent,
    BotatoAddPrincipalComponent,
    ModalGastosCadastradosComponent,
    DetalhesGastosComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBottomSheetModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DetalhesGastosComponent,
    ListaGastosComponent,
  ],
  entryComponents: [DetalhesGastosComponent, ListaGastosComponent, DetalhesGastosComponent],
  providers: [MatBottomSheet],
  bootstrap: [AppComponent],
})
export class AppModule { }
