import { Component, OnInit } from '@angular/core';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { bandaService } from 'src/app/services/domain/banda.service';

@Component({
  selector: 'app-edit-banda',
  templateUrl: './edit-banda.page.html',
  styleUrls: ['./edit-banda.page.scss'],
})
export class EditBandaPage implements OnInit {
  bandas!: BandaDTO[];

  constructor(public bandaService: bandaService) { }
  ionViewDidEnter() {
    this.bandaService.findAll()
      .subscribe(response => {
        this.bandas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
  ngOnInit() {
  }

}
