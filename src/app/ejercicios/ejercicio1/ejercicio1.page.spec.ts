import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio1Page } from './ejercicio1.page';

describe('Ejercicio1Page', () => {
  let component: Ejercicio1Page;
  let fixture: ComponentFixture<Ejercicio1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
