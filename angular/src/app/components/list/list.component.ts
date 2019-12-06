import { Component, ViewChild, OnInit } from "@angular/core";
import { Persona } from "../../models/persona.model"; // se importa el modelo de datos de persona
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ServicioFormulario } from "../../services/servicioFormulario.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  arrayContactos: any = [];
  datosContactos: MatTableDataSource<Persona>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  columnas: string[] = [
    "nombreContacto",
    "apellidosContacto",
    "edadContacto",
    "dniContacto",
    "cumpleanosContacto",
    "colorFavoritoContacto",
    "sexoContacto",
    "editar",
    "eliminar"
  ];

  constructor(private servicioFormulario: ServicioFormulario) {
    this.cargarPersonas();
  }

  ngOnInit() { }

  cargarPersonas() {
    return this.servicioFormulario.getContactos().subscribe((data: {}) => {
      this.arrayContactos = data;
      this.datosContactos = new MatTableDataSource<Persona>(this.arrayContactos);
    });
  }

  eliminarContacto(id) {
    this.servicioFormulario.eliminarContacto(id).subscribe((data: {}) => {
      window.location.reload();
    });
  }
}
