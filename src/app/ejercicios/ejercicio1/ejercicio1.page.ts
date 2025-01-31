import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Ejercicio1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
