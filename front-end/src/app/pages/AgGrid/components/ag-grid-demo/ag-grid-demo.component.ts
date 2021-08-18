import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AgGridAngular} from "ag-grid-angular";

@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss']
})
export class AgGridDemoComponent implements OnInit {
  @ViewChild('agGrid') agGrid!: AgGridAngular;

  columnDefs = [
    {field: 'make', sortable: true, filter: true, checkboxSelection: true},
    {field: 'model', sortable: true, filter: true},
    {field: 'price', sortable: true, filter: true}
  ];

  public rowData!: Observable<any[]>

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
