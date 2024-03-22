import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../../projects/ui/src/lib/ui/table-1/table.component";
import { Table2Component } from '../../projects/ui/src/lib/ui/table-2/table-2.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent, Table2Component]
})
export class AppComponent {
  title = 'Blulogix-SP';
tableData: any;
}
