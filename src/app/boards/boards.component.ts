import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';
import { BoardService } from '../services/board.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent {

  constructor(private dialog: MatDialog, public boardService: BoardService) {}

  openNewBoardDialog() {

    const dialogRef = this.dialog.open(BoardsDialogComponent, {
      width: '400px',
    });
  }

  deleteBoard(index: number) {
    this.boardService.deleteBoard(index);
  }
 }
