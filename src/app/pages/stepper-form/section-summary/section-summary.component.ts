import { Component, Input, OnInit } from '@angular/core';
import { FormSummary } from '../../../models/form-summary.model';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.scss'],
})
export class SectionSummaryComponent implements OnInit {
  @Input() sectionSummaries: FormSummary[];

  constructor() {}

  ngOnInit(): void {}
}
