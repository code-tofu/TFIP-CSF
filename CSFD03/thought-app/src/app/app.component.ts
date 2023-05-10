import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  thoughtForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  thoughts: string[] = [];

  ngOnInit(): void {
    this.thoughtForm = this.fb.group({
      thought: this.fb.control('', [Validators.required]),
    });
  }
  clearThought() {
    this.thoughtForm.reset();
  }

  processThought() {
    // console.info(this.thoughtForm.value.thought);
    this.thoughts = [...this.thoughts, this.thoughtForm.value.thought];
    // console.info(this.thoughts);
    this.thoughtForm.reset();
  }
}
