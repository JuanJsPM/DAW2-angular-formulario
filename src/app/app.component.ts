import { Component } from '@angular/core';
import { user } from "./user"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FORMULARIO';
  usuario = "";
  telefono = "";
  nuevo_usuario = "";
  nuevos_telefono = "";
  nuevos_correo = "";
  modify!: boolean;
  itemToModify!: number;
  error!: boolean;
  correo: String = "";
  users: user[] = [];

  total_id = -1;
  
  

  addUser(): void {
    if (this.usuario.length > 0 && this.telefono.length > 0 && this.correo.length > 0 )
    {
      this.total_id++;
      var item: user = {
        usuario: this.usuario,
        telefono: this.telefono,
        correo: this.correo,
        id: this.total_id
      }

      this.users.push(item);
    } else {
      this.error = true;
    }
    
  }

  removeItem(id: number): void {
    const index = this.users.findIndex((item) => item.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
    }
    this.modify = false;
  }

  displayModifyItem(id: number): void {
    this.modify = true;
    this.itemToModify = id;
  }

  modifyItem(): void {
    const index = this.users.findIndex((item) => item.id === this.itemToModify);
    this.users[index].usuario = this.nuevo_usuario;
    this.users[index].telefono = this.nuevos_telefono;
    this.users[index].correo = this.nuevos_correo;
    this.nuevo_usuario = "";
    this.nuevos_telefono = "";
    this.nuevos_correo = "";
    this.modify = false;
  }
}
