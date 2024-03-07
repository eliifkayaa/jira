import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wiew-board-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogModule, MatIconModule, FormsModule, MatSnackBarModule],
  templateUrl: './wiew-board-dialog.component.html',
  styleUrl: './wiew-board-dialog.component.css'
})

export class WiewBoardDialogComponent implements OnInit {

  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false]

  constructor(private dialogRef: MatDialogRef<WiewBoardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public boardService: BoardService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.data.editMode) {
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title;

      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status;

      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist;
    }
  }


  deleteTask(i: number) {
    this.tasks.splice(i,1);
  }

  addTasks() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }

  create() {
    if (this.tasks.some((element: string) => element === "")) {
      this._snackBar.open("Yeni Taskı Giriniz", "Ok")
    } else {

      if (!this.data.editMode) {
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checklist: this.tasks,
          status: this.tasksLoop
        });
      }

      else {
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title

        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop

        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks
      }

      this.boardService.updateDataToLocalStorage();
      this.close()
    }
  }

}
