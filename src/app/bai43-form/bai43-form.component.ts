import { Component, OnInit } from '@angular/core';
import { SignService } from './sign.service';
@Component({
  selector: 'app-bai43-form',
  templateUrl: './bai43-form.component.html',
  styleUrls: ['./bai43-form.component.css'],
  providers: [SignService],
})
export class Bai43FormComponent implements OnInit {
  constructor(private SignService: SignService) { }

  ngOnInit() {
  }
  onSubmit(formsign){
    this.SignService.sendpost(formsign.value)
    .then(ress => console.log(ress))
    .catch(err => console.log(err));

  }

}
