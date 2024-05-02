// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// Reactive Forms Section
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fusion-fiesta',
  templateUrl: './fusion-fiesta.component.html',
  styleUrls: ['./fusion-fiesta.component.css']
})
export class FusionFiestaComponent {
  // Reactive form setup
  feedbackForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userFeedback: new FormControl('', [Validators.required])
  });

  // Template-driven form model
  templateForm = {
    feedbackRating: 0,
    optionalComment: ''
  };

  // Combined output
  combinedFeedback: string = '';

  // Method to display combined feedback
  displayFeedback(): void {
    const reactiveFormFeedback = `Name: ${this.feedbackForm.value.userName}, Email: ${this.feedbackForm.value.userEmail}, Feedback: ${this.feedbackForm.value.userFeedback}`;
    const templateFormFeedback = `Rating: ${this.templateForm.feedbackRating}, Comment: ${this.templateForm.optionalComment}`;
    this.combinedFeedback = `${reactiveFormFeedback}\n${templateFormFeedback}`;
  }

  // Method to handle form submission
  onSubmit(): void {
    this.displayFeedback();
    // Transform feedback to uppercase using Angular pipe
    this.combinedFeedback = this.combinedFeedback.toUpperCase();
  }
}
