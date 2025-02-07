import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonLabel, IonList, IonCardContent } from '@ionic/angular/standalone';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardHeader, IonLabel, IonList, IonCardContent]
})
export class Ejercicio3Page implements OnInit {
  peliculas: any[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getPeliculasPopulares().subscribe(response => {
      console.log(response.results);
      this.peliculas = response.results;
    });
  }
}
