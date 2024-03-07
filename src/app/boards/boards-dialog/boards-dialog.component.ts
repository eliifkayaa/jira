import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-boards-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogModule],
  templateUrl: './boards-dialog.component.html',
  styleUrl: './boards-dialog.component.css'
})
export class BoardsDialogComponent implements OnInit {
  ngOnInit(): void { }

  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>, private boardService: BoardService) { }
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value)
    this.dialogRef.close()
  }

  close() {
    this.dialogRef.close();
  }




}
