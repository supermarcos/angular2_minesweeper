import {Component} from 'angular2/angular2';
import {MinesweeperComponent} from '../minesweeper/minesweeper.component';
import {createGame} from '../minesweeper/game';

@Component({
  selector: 'app',
  template: `
  <minesweeper [game]="game" #minesweeper></minesweeper>
  <ul class="actions">
    <li><a (click)="startNewGame()">New game</a></li>
    <li><a (click)="minesweeper.undo()" [hidden]="!minesweeper.canUndo()">Undo</a></li>
  </ul>
  `,
  directives: [MinesweeperComponent]
})
export class App {
  public game;
  constructor(){
    
  }
  onInit(){
    this.startNewGame();
  }
  startNewGame(){
    this.game = createGame({cols: 16, rows: 16, mines: 48});
  }
} 