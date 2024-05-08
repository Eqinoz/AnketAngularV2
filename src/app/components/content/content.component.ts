import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuestionsModel } from '../../models/questions';
import { OptionsModel } from '../../models/options';
import { OptionService } from '../../services/option.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  questions: QuestionsModel[] = [];
  options: OptionsModel[] = [];
  addForm: FormGroup;
  apiUrlQuestion = 'https://localhost:44305/Questions';

  constructor(
    private httpClient: HttpClient,
    private optionService: OptionService,
    private formBuilder: FormBuilder
  ) {
    this.createaddForm();
  }

  ngOnInit(): void {
    this.addForm;
    this.getQuestion();
    this.getOption();
    this.createaddForm;
  }
  createaddForm() {
    this.addForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      question_id: ['', Validators.required],
      option_id: ['', Validators.required],
    });
  }
  getQuestion() {
    this.httpClient
      .get<QuestionsModel[]>(this.apiUrlQuestion)
      .subscribe((response) => {
        this.questions = response;
      });
  }
  getOption() {
    this.optionService.getOption().subscribe((data) => {
      this.options = data;
    });
  }
  submit() {
    let answerModel = Object.assign({}, this.addForm.value);
    console.log(answerModel);
  }
}
