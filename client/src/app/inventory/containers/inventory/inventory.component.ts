import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.state';
import { InventoryService } from '../../inventory.service';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  @Input() steamId: string;

  inventories$: Observable<Inventory[]>;

  constructor(private readonly store: Store<AppState>, private readonly inventoryService: InventoryService) {}

  ngOnInit(): void {
    // this.inventories$ = this.store.select(selectBotInventories(this.steamId));
    this.inventories$ = this.inventoryService.getBotInventories(this.steamId);
  }

  onInventoryAdd(): void {
    console.log(`Add`);
  }

  onInventoryShow(id: string): void {
    console.log(`Show: ${id}`);
  }

  onInventoryRefresh(id: string): void {
    console.log(`Refresh: ${id}`);
  }

  onInventoryDelete(id: string): void {
    console.log(`Delete: ${id}`);
  }
}