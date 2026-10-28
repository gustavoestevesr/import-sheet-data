import { Component, inject, signal } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../../services/usuarios';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry, enableDevValidations } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns'

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  imports: [AgGridAngular],
  selector: 'app-usuarios-table',
  styleUrl: './usuarios-table.css',
  templateUrl: './usuarios-table.html',
})
export class UsuariosTable {
  private readonly http = inject(HttpClient);

  readonly defaultColDef: ColDef = {
    filter: true,
  };

  rowData: IRow[] = [];

  colDefs: ColDef[] = [
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date', valueFormatter: params => { return params.value === null ? '' : format(params.value, 'dd/MM/yyyy') } },
    { field: 'price', valueFormatter: params => { return params.value === null ? '' : 'R$' + params.value } },
    { field: 'successful' },
    { field: 'rocket' },
  ];

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .subscribe((data) => (this.rowData = data));
  }

  adicionarClick(): void {}

  importarClick(): void {}

  buscarUsuarios(): void {}
}
