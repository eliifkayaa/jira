import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BoardService } from '../services/board.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { WiewBoardDialogComponent } from './wiew-board-dialog/wiew-board-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-board',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatDialogModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule],
  templateUrl: './view-board.component.html',
  styleUrl: './view-board.component.css'
})
export class ViewBoardComponent implements OnInit {
  boardIndex: any = 0;
  boardTitle: string = ''

  constructor(private route: ActivatedRoute, public boardService: BoardService, private dialog: MatDialog) {}
    
    ngOnInit(): void {

      this.boardIndex = this.route.snapshot.paramMap.get('boardIndex')
    
      this.boardTitle = this.boardService.boards[this.boardIndex].title
  };

  openNewCardDialog() {
    const dialogRef = this.dialog.open(WiewBoardDialogComponent, {
      width: '500px',
      data: {boardIndex: this.boardIndex, editMode:false}
    });
  }

  deleteCard(i: number) {
    this.boardService.boards[this.boardIndex].cards.splice(i,1)
    this.boardService.updateDataToLocalStorage();
  }

  editCard(indexCard:number, card:any) {
    const dialogRef = this.dialog.open(WiewBoardDialogComponent, {
      width: '500px',
      data: {boardIndex: this.boardIndex, editMode:true, cardIndex: indexCard}
    });
  }
  }

