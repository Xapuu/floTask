import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { urgentValidator } from '../validators/urgent-validator';



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})


export class DynamicFormComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | any;

  SENT = 'SENT';
  NOT_SENT = 'NOT_SENT';

  URGENT = 'URGENT';
  NOT_URGENT = 'NOT_URGENT';

  form = new FormGroup({
    sentDocument: new FormControl([]),
  });

  fileToUpload: File | undefined = undefined;




  sentForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    comment: new FormControl(),
  });

  notSentForm = new FormGroup({
    passportNumber: new FormControl(),
    isUrgent: new FormControl(),
    deadline: new FormControl('')
  });


  hints$ = new BehaviorSubject(['321456', '321897']);
  get passportControlRef() {
    return this.notSentForm.get('passportNumber') as FormControl;
  }

  get sentFormCase() {
    return this.form.get('sentDocument')?.value;
  }

  ngOnInit(): void {
    this.notSentForm.get('isUrgent')?.setValidators(((c) => urgentValidator(c, this.notSentForm.get('deadline') as AbstractControl)));
  }

  handleUpload(files: any) {
    this.sentForm?.get('file')?.setValue(files[0].name)
    this.fileToUpload = files[0];
  }
}

