import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  inventoryForm: FormGroup;
  products: any[] = [];

  constructor(private fb: FormBuilder) {
    this.inventoryForm = this.fb.group({
      name: ['', Validators.required],
      colorVariants: ['', Validators.required],
      sizeVariants: ['', Validators.required],
      brand: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(1)]],
      initialStock: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      this.products.push(this.inventoryForm.value);
      this.inventoryForm.reset();
    }
  }
}
