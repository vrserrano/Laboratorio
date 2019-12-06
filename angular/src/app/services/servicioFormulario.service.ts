import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Persona } from "../models/persona.model";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})

export class ServicioFormulario {
	// Define API
	apiURL = "http://localhost:3000";
	actualizarContactoURL: any;
	actualizarContactoPersona: any;

	constructor(private http: HttpClient) { }

	// Http Options
	httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json"
		})
	};

	getContactos(): Observable<Persona> {
		return this.http
			.get<Persona>(this.apiURL + "/personas")
			.pipe(retry(1), catchError(this.manejarError));
	}

	getContacto(id: string): Observable<Persona> {
		return this.http
			.get<Persona>(this.apiURL + "/personas/" + id)
			.pipe(retry(1), catchError(this.manejarError))
	}

	crearContacto(persona: Persona): Observable<Persona> {
		return this.http
			.post<Persona>(
				this.apiURL + "/personas",
				JSON.stringify(persona),
				this.httpOptions
			)
			.pipe(retry(1), catchError(this.manejarError));
	}

	actualizarContacto(id: string, persona: Persona): Observable<Persona> {
		this.actualizarContactoURL = this.apiURL + "/personas/" + id;
		this.actualizarContactoPersona = JSON.stringify(persona)

		return this.http
			.put<Persona>(
				this.actualizarContactoURL,
				this.actualizarContactoPersona,
				this.httpOptions
			)
			.pipe(retry(1), catchError(this.manejarError));
	}

	eliminarContacto(id: string): Observable<Persona> {
		return this.http.delete<Persona>(this.apiURL + "/personas/" + id, this.httpOptions)
			.pipe(retry(1), catchError(this.manejarError))
	}

	manejarError(error) {
		let errorMessage = "";
		if (error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		} else {
			errorMessage = `Codigo error: ${error.status}\nMensaje: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
}
