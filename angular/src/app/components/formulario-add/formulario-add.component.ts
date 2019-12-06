import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioFormulario } from '../../services/servicioFormulario.service';
import { Persona } from '../../models/persona.model'; // se importa el modelo de datos de contacto
import { Router } from '@angular/router';

@Component({
	selector: 'app-formulario-add',
	templateUrl: './formulario-add.component.html',
	styleUrls: ['./formulario-add.component.css']
})

export class FormularioAddComponent implements OnInit {
	contactoFormulario: FormGroup;
	sexos: string[] = ['Hombre', 'Mujer', 'Otro', 'No definido'];

	ngOnInit() {
		this.formValidations();
	}
	constructor(
		public fb: FormBuilder,
		public servicioFormulario: ServicioFormulario, 
		private router: Router
	) { }

	formValidations() {
		this.contactoFormulario = this.fb.group({
			nombreContacto: ['', [Validators.required, Validators.minLength(3)]],
			apellidosContacto: ['', [Validators.required, Validators.minLength(3)]],
			edadContacto: ['', [Validators.required, Validators.maxLength(3), Validators.max(125), Validators.min(0)]],
			dniContacto: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
			cumpleanosContacto: ['', [Validators.required]],
			colorContacto: ['', [Validators.required, Validators.minLength(3)]],
			sexoContacto: ['', [Validators.required]]
		})
	}

	addContacto() {
		this.servicioFormulario.crearContacto(new Persona(
			this.contactoFormulario.get("nombreContacto").value,
			this.contactoFormulario.get("apellidosContacto").value,
			this.contactoFormulario.get("edadContacto").value,
			this.contactoFormulario.get("dniContacto").value,
			this.contactoFormulario.get("cumpleanosContacto").value,
			this.contactoFormulario.get("colorContacto").value,
			this.contactoFormulario.get("sexoContacto").value,
		)).subscribe((data: {}) => {
			this.router.navigate([''])
		})
	}
}


