import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
@Component({
  selector: 'app-bai58-contact-detail',
  templateUrl: './bai58-contact-detail.component.html',
  styleUrls: ['./bai58-contact-detail.component.css']
})
export class Bai58ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);
    });
  }

}
