import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioFormulario } from 'src/app/services/servicioFormulario.service';
import { Persona } from '../../models/persona.model'; // se importa el modelo de datos de persona
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-formulario-edit',
	templateUrl: './formulario-edit.component.html',
	styleUrls: ['./formulario-edit.component.css']
})

export class FormularioEditComponent implements OnInit {
	contactoFormulario: FormGroup;
	sexos: string[] = ['Hombre', 'Mujer', 'Otro', 'No definido'];
	id = this.actRoute.snapshot.params['id'];
	private contactoEditar: any;


	ngOnInit() {
		this.servicioFormulario.getContacto(this.id).subscribe((data: {}) => {
			this.contactoEditar = data;
			this.contactoFormulario = this.fb.group({
				nombreContacto: [this.contactoEditar[0].nombre, [Validators.required, Validators.minLength(3)]],
				apellidosContacto: [this.contactoEditar[0].apellidos, [Validators.required, Validators.minLength(3)]],
				edadContacto: [this.contactoEditar[0].edad, [Validators.required, Validators.maxLength(3), Validators.max(125), Validators.min(0)]],
				dniContacto: [this.contactoEditar[0].dni, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
				cumpleanosContacto: [this.contactoEditar[0].cumpleanos, [Validators.required]],
				colorContacto: [this.contactoEditar[0].colorFavorito, [Validators.required, Validators.minLength(3)]],
				sexoContacto: [this.contactoEditar[0].sexo, [Validators.required]],
			})
		});
	}

	constructor(
		public fb: FormBuilder,
		private servicioFormulario: ServicioFormulario,  // se vincula el servicio con el componente
		public actRoute: ActivatedRoute,
		public router: Router
	) { }

	editarContacto() {
		this.servicioFormulario.actualizarContacto(this.id, new Persona(
			this.contactoFormulario.get("nombreContacto").value,
			this.contactoFormulario.get("apellidosContacto").value,
			this.contactoFormulario.get("edadContacto").value,
			this.contactoFormulario.get("dniContacto").value,
			this.contactoFormulario.get("cumpleanosContacto").value,
			this.contactoFormulario.get("colorContacto").value,
			this.contactoFormulario.get("sexoContacto").value,
		)).subscribe((data: {}) => {
			this.router.navigate(['/listaContactos'])
		});
	}
}
