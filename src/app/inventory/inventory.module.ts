import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa esto
import { ReactiveFormsModule } from '@angular/forms'; // Necesario para formularios reactivos
import { ManageComponent } from './manage/manage.component';
import { VariantsComponent } from './variants/variants.component';
import { OperationsComponent } from './operations/operations.component';


@NgModule({
  declarations: [
    ManageComponent,
    VariantsComponent,
    OperationsComponent,
  ],
  imports: [
    CommonModule, // Asegúrate de incluir CommonModule
    ReactiveFormsModule, // Asegúrate de incluir ReactiveFormsModule
  ],
})
export class InventoryModule { }
