import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  formData: any;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.formData = history.state.formData;
  }
}
