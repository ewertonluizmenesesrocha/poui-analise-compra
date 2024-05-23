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
    { id: 1, name: 'Item 1', description: 'Descrição do Item 1' },
    { id: 2, name: 'Item 2', description: 'Descrição do Item 2' },
    { id: 3, name: 'Item 3', description: 'Descrição do Item 3' }
  ];

  cadObj() {

  }
}
