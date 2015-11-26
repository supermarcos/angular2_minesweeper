import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';
import {partition} from './util';
import {revealTile, isGameOver} from './game';
import {RowComponent} from './row.component';

@Component({
  selector: 'minesweeper',
  template: `
  <div class="board">
    <row *ng-for="#row of rows" [row]="row" (tile-click)="handleTileClick($event)"></row>
  </div>
  `,
  directives: [CORE_DIRECTIVES, RowComponent]
})
export class MinesweeperComponent {
  @Input() game: any;
  rows;
  history = Immutable.List();
  
  onChanges(changes){
    
    // Only update game when game has actually changed
    if(changes.hasOwnProperty('game')){
      this.updateGame()
    }
  }
  
  updateGame(updateHistory = true){
    this.rows = partition(this.game.get('cols'), this.game.get('tiles'));
    if(updateHistory){
      this.history = this.history.push(this.game);
    }
  }
  
  handleTileClick(tile){
    if(!tile){
      return;
    }
    if (isGameOver(this.game)) {
      return;
    }
    const newGame = revealTile(this.game, tile.get('id'));
    if (newGame !== this.game) {
      this.game = newGame;
      this.updateGame();
    }
    if (isGameOver(this.game)) {
      window.alert('GAME OVER!');
    }
  }
  
  undo(){
    if (this.canUndo()) {
      this.history = this.history.pop();
      this.game = this.history.last();
      
      // Don't update the history so we don't end up with
      // the same game twice in the end of the list
      this.updateGame(false);
    }
  }
  
  canUndo(){
    return this.history.size > 1;
  }
}