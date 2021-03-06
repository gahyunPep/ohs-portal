import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-custom-components',
  templateUrl: './custom-components.component.html',
  styleUrls: ['./custom-components.component.scss'],
})
export class CustomComponentsComponent implements OnInit {
  termsOfRef = {
    title: 'Terms of Reference',
    stepperIndex: '1',
    fieldUIPortion: 11,
    sections: [
      {
        sectionName: 'Quroum',
        fields: [
          { fieldName: 'Minimum # of attendees', value: '4' },
          { fieldName: 'Minimum # of employers', value: '2' },
          { fieldName: 'Minimum # of employees', value: '3' },
        ],
      },
      {
        sectionName: 'Representation structure',
        fields: [
          { fieldName: 'Fraser Health Authority', value: '4' },
          { fieldName: 'Hospital Employees’ Union', value: '2' },
          { fieldName: 'BC Nurses’ Union', value: '3' },
          {
            fieldName: 'BC Government and Service Employees’ Union',
            value: '3',
          },
        ],
      },
      {
        sectionName: '',
        fields: [
          { fieldName: 'Minimum # of attendees', value: '4' },
          { fieldName: 'Minimum # of employers', value: '2' },
          { fieldName: 'Minimum # of employees', value: '3' },
        ],
      },
    ],
  };

  committeeInfo = {
    title: 'Committee information',
    stepperIndex: '2',
    styles: {
      fieldUIPortion: 8,
      backgroundColor: '',
    },
    sections: [
      {
        sectionName: '',
        fields: [
          {
            fieldName: 'Operating health authority',
            value: 'phsa',
          },
          {
            fieldName: 'Hosting health authority',
            value: 'phsa',
          },
          {
            fieldName: 'Base location of committee',
            value: 'vancouver',
          },
          {
            fieldName: 'Multi-Employer',
            value: 'Yes',
          },
        ],
      },
    ],
  };

  // Doughnut chart
  chartLabels: Label[] = ['assigned', 'in-progress', 'completed'];
  chartData: SingleDataSet = [55, 25, 20];
  chartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
