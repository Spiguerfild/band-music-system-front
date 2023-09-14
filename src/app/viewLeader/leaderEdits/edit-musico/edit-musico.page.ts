import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { MusicoDTO } from 'src/app/models/MusicoDTO';
import { MusicoService } from 'src/app/services/domain/musico.service';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-edit-musico',
  templateUrl: './edit-musico.page.html',
  styleUrls: ['./edit-musico.page.scss'],
})
export class EditMusicoPage implements OnInit {

  musicos!: MusicoDTO[];
  isModalOpen = false;

  constructor(public musicoService: MusicoService) { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter() {
    this.musicoService.findAll()
      .subscribe(response => {
        this.musicos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}