import { Component, Input, SimpleChanges } from '@angular/core';
import { Pipes } from 'app/shared/utils/pipes.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

  p: number = 1;
  id: string;

  @Input() title: string;
  @Input() description: string;
  @Input() columns: string[];
  @Input() dataSource: Object[];

  showEmptyText: boolean;

  pipes = new Pipes();

  constructor() {
    this.id = this.pipes.generateId();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataSource?.currentValue.length < 1) this.showEmptyText = true;
  }

}
