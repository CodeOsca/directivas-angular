import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  text1:string = 'oscar colina'
  color:string = 'red'
  form:FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });


  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  hasError(filed:string):boolean{
    return this.form.get(filed)?.invalid || false;
  }


  cambiarNombre(){
    this.text1 = 'Oscar José'
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color
  }

}
