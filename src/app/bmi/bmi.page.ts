import { Component, OnInit } from '@angular/core';
import { BMIService } from 'src/app/providers/bmi.service';
import { BMI } from '../models/bmi.model';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {
height: number;
weight: number;
BMI: BMI;
  constructor(private bmiService: BMIService) {
   }
   calculateBmi() {
    this.BMI = this.bmiService.calculateBMI(this.height, this.weight);
   }
  ngOnInit() {
  }

}
