import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards : Array<any> = []

  //localStrogedan girdiğim veriyi constructor içinde çağırmam gerekir.
  //Bir classın new instance alındığında önce constructor çalışır. thi.boards ile atamam lazım.

  constructor() {
    let str = localStorage.getItem('boards');
    if(str != null) {
      this.boards = JSON.parse(str);
    }
   }

  public createBoard(title: any) {
    let newBoardObj = {
      title: title,
      cards: []
    }
    this.boards.push(newBoardObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public deleteBoard(boardNumber: number) {
    this.boards.splice(boardNumber,1) //1 soluna yapıştır yani diziden çıkarıldı.
    localStorage.setItem('boards', JSON.stringify(this.boards)); //sayfayı güncelleme
  }

  public updateDataToLocalStorage() {
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
}
