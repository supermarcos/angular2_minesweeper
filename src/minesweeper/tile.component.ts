import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'tile',
  template: `
  <div class="tile" [class.mine]="tile.get('isMine')">
    <div class="lid" *ng-if="!tile.get('isRevealed')"></div>
    <div *ng-if="tile.get('isRevealed') && !tile.get('isMine')">
      {{ tile.get('threatCount') > 0 ? tile.get('threatCount') : '' }}
    </div>
  </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class TileComponent {
  @Input() tile: any;
}