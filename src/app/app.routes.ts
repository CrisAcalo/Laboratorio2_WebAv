import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './inventory/manage/manage.component';
import { OperationsComponent } from './inventory/operations/operations.component';
import { VariantsComponent } from './inventory/variants/variants.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inventory/manage', pathMatch: 'full' },
  { path: 'inventory/manage', component: ManageComponent },
  { path: 'inventory/operations', component: OperationsComponent },
  { path: 'inventory/variants', component: VariantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
