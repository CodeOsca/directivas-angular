import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[err-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{
  htmlElement:ElementRef<HTMLElement>
  @Input() color:string = 'red'
  @Input() mensaje:string = 'Coloresde'

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.mensaje = changes.mensaje?.currentValue
    this.color = changes.color?.currentValue
    this.setText()
    this.setColor()
  }

  ngOnInit(): void {
    this.setColor()
    this.setText()
    this.textClass()
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this.color
  }

  setText(){
    this.htmlElement.nativeElement.textContent = this.mensaje
  }

  textClass(){
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  fieldValid(){
    
  }

}
