import { Injectable } from '@angular/core';

export interface Contactos {
  id: number;
  nombre: string;
  edad: number;
  puesto: string;
  telefono: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactosService {
  constructor() { }

  private contactos: Contactos[] = [
    {
      id: 1,
      nombre: 'Juan Perez',
      edad: 35,
      puesto: 'Gerente',
      telefono: '1234567890',
      foto: 'https://cdn.pixabay.com/photo'
    },

    {
      id: 2,
      nombre: 'Maria Lopez',
      edad: 25,
      puesto: 'Contadora',
      telefono: '0987654321',
      foto: 'https://cdn.pixabay.com/photo'
    },

    {
      id: 3,
      nombre: 'Pedro Martinez',
      edad: 30,
      puesto: 'Vendedor',
      telefono: '1357924680',
      foto: 'https://cdn.pixabay.com/photo'
    }];
  
  getContactos(): Contactos[] {
    return this.contactos;
  }
  
  getContacto(id: number): Contactos {
    const contacto = this.contactos.find(contacto => contacto.id === id);
    if (!contacto) {
      throw new Error(`No se encontró el contacto con id: ${id}.`);
    }
    return contacto;
  }

  addContacto(contacto: Contactos): void {
    this.contactos.push(contacto);
  }
  
  updateContacto(contacto: Contactos): void {
    const index = this.contactos.findIndex(c => c.id === contacto.id);
    this.contactos[index] = contacto;
  }

  deleteContacto(id: number): void {
    this.contactos = this.contactos.filter(contacto => contacto.id !== id);
  }

  getNextId(): number {
    return this.contactos.length > 0 ? Math.max(...this.contactos.map(contacto => contacto.id)) + 1 : 1;
  }

  getContactosByNombre(nombre: string): Contactos[] {
    return this.contactos.filter(contacto => contacto.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
}