import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-variants',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './variants.component.html',
  styleUrl: './variants.component.scss'
})
export class VariantsComponent {
  variantsForm: FormGroup;
  products: any[] = [];

  colors: string[] = ['Rojo', 'Negro', 'Azul', 'Blanco', 'Verde'];
  sizes: string[] = ['36', '37', '38', '39', '40', '41', '42'];

  constructor(private fb: FormBuilder) {
    this.variantsForm = this.fb.group({
      name: ['', Validators.required],
      selectedColors: this.fb.array([], [Validators.required]),
      selectedSize: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }

  get selectedColors() {
    return this.variantsForm.get('selectedColors') as FormArray;
  }

  onColorChange(event: any) {
    const color = event.target.value;
    if (event.target.checked) {
      this.selectedColors.push(this.fb.control(color));
    } else {
      const index = this.selectedColors.controls.findIndex(
        (ctrl) => ctrl.value === color
      );
      this.selectedColors.removeAt(index);
    }
  }

  onSubmit() {
    if (this.variantsForm.valid) {
      this.products.push(this.variantsForm.value);
      this.variantsForm.reset();
      this.selectedColors.clear();
    }
  }
}
