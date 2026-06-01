import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-seccion5-franquicias',
  imports: [FormsModule],
  templateUrl: './seccion5-franquicias.html',
  styleUrls: ['./seccion5-franquicias.css'],
})
export class Seccion5Franquicias {
  enviarAWhatsApp(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { nombre, correo, telefono, ubicacion, interes } = form.value;


    const numeroDestino = '524463758196';

    const mensajeFormateado = 
      `*¡NUEVO LEAD DE FRANQUICIA!* \n\n` +
      `*INFORMACIÓN GENERAL:*\n` +
      `• *Nombre:* ${nombre}\n` +
      `• *Correo:* ${correo}\n` +
      `• *WhatsApp:* ${telefono}\n` +
      `• *Zona de Interés:* ${ubicacion}\n\n` +
      `*SOBRE EL CANDIDATO:*\n` +
      `> ${interes}\n\n` +
      `Revisaremos y responderemos a la brevedad._`;

    const mensajeCodificado = encodeURIComponent(mensajeFormateado);

    const urlWhatsApp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');

    form.resetForm();
  }
}
