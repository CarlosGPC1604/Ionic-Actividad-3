import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonList, IonCard, IonCardHeader, IonCardContent, IonAvatar, IonItem, IonCardTitle, IonLabel} from '@ionic/angular/standalone';
import { ContactosService } from 'src/app/services/contactos.service';
import { Contactos } from '../../services/contactos.service';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonCard, IonCardHeader, IonCardContent, IonAvatar, IonItem, IonCardTitle, IonLabel]
})
export class Ejercicio2Page implements OnInit {
  contactos: Contactos[] = [];

  constructor(private contactosService: ContactosService) { }

  ngOnInit() {
    this.contactos = this.contactosService.getContactos();
  }


}
