import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-operations',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent {
  operationsForm: FormGroup;
  products: any[] = [];

  // Datos de ejemplo (en un escenario real, estos datos vendrían de una base de datos o API)
  productList: any[] = [
    { id: 1, name: 'Zapato Rojo', stock: 10 },
    { id: 2, name: 'Zapato Negro', stock: 5 },
    { id: 3, name: 'Zapato Azul', stock: 8 },
  ];

  constructor(private fb: FormBuilder) {
    this.operationsForm = this.fb.group({
      product: ['', Validators.required],
      operationType: ['entrada', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      operationDate: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.operationsForm.valid) {
      const selectedProduct = this.productList.find(
        (product) => product.id === this.operationsForm.value.product
      );

      if (this.operationsForm.value.operationType === 'entrada') {
        selectedProduct.stock += this.operationsForm.value.quantity;
      } else if (this.operationsForm.value.operationType === 'salida') {
        if (selectedProduct.stock >= this.operationsForm.value.quantity) {
          selectedProduct.stock -= this.operationsForm.value.quantity;
        } else {
          alert('No hay suficiente stock para realizar la salida');
        }
      }

      this.operationsForm.reset();
    }
  }
}
