import { Component } from '@angular/core';
import { PoPageAction, PoPageModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [PoPageModule,PoTableModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', action: this.cadObj.bind(this), disabled: true },
    { label: 'Page', url: 'https://po-ui.io/documentation/po-page-list' }
  ];

  readonly items = [
    { id: 1, name: 'Item 1', descricao: 'Descrição do Item 1', preco: "12,00", data: "27/05/2024"},
    { id: 2, name: 'Item 2', descricao: 'Descrição do Item 2', preco: "10,30", data: "14/05/2024"},
    { id: 3, name: 'Item 3', descricao: 'Descrição do Item 3', preco: "45,00", data: "24/01/2024"}
  ];

  cadObj() {

  }
}
