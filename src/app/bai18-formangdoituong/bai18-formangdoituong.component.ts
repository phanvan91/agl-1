import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai18-formangdoituong',
  templateUrl: './bai18-formangdoituong.component.html',
  styleUrls: ['./bai18-formangdoituong.component.css']
})
export class Bai18FormangdoituongComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
