import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai19-themphantuvaomang',
  templateUrl: './bai19-themphantuvaomang.component.html',
  styleUrls: ['./bai19-themphantuvaomang.component.css']
})
export class Bai19ThemphantuvaomangComponent implements OnInit {
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  nho = {color: 'green'};
  khongnho = {color : 'red'};
  newEn = '';
  newVn = '';
  anhien = true;
  filterstatus = 'Xem_Tat_Ca' ;
  thuocbai = true;
  constructor() { }

  ngOnInit() {
  }
  themtumoi(){
    console.log(this.newEn);
    console.log(this.newVn);
    this.arrWords.unshift({
      id:this.arrWords.length + 1,
      en:this.newEn,
      vn:this.newVn,
      memorized:false
    });
    this.newEn = '';
    this.newVn = '';
    this.anhien = true;
    console.log(this.arrWords);
  }
  xoa(id: number){
    // console.log(id);
    const index = this.arrWords.findIndex(e => e.id === id);
    console.log(index);
    this.arrWords.splice(index ,1);
  }
  xemtu(memorized){
    const dkxtc = this.filterstatus === 'Xem_Tat_Ca';
    const dkdn = this.filterstatus === 'Xem_Da_Nho' && memorized;
    const dkcn = this.filterstatus === 'Xem_Chua_Nho' && !memorized;
    return dkxtc || dkdn || dkcn;
  }
}
