import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;
  qualifications = [
    'High School',
    'Associate Degree',
    'Bachelor Degree',
    'Master Degree',
    'PhD'
  ];

  constructor(private fb: FormBuilder, public router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      qualifications: ['', Validators.required],
      address: [''],
      image: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/result'], { state: { formData: this.form.value } });
    }
  }
}
