import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {TileComponent} from './tile.component';

@Component({
  selector: 'row',
  template: `
  <div class="row">
      <tile *ng-for="#tile of row" [tile]="tile" (click)="handleTileClick(tile)"></tile>
    </div>
  `,
  directives: [CORE_DIRECTIVES, TileComponent]
})
export class RowComponent {
  @Input() row: any;
  @Output() tileClick: EventEmitter = new EventEmitter();

  handleTileClick(tile){
    this.tileClick.next(tile);
  }
}