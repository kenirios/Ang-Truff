import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollForm } from '../types';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss'],
})
export class PollCreateComponent {
  pollForm: FormGroup;

  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group({
      nombre: this.fb.control('', [Validators.required]),
      cantidad: this.fb.control(''),
     
     
    });
  }

  submitForm() {
    const formData: PollForm = {
      nombre: this.pollForm.get('nombre').value,
      cantidad: this.pollForm.get('cantidad').value,      
      
    };

    this.pollCreated.emit(formData);
  }
}
