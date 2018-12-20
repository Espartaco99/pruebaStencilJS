import { Component, Prop, Event, EventEmitter, Listen, State, Method } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() cadena: string;

  @Event() sendCadena: EventEmitter;

  @Method()
  changeCadena(nuevaCadena: string){
    this.cadena = nuevaCadena;
  }

  // Escucha el evento click
  @Listen('click')
  funClick(){
    this.cadena = 'En el onclick';
    this.sendCadena.emit(this.first);
  }

  // Como ngOnInit
  componentWillLoad(){
    this.cadena = 'Hola'
    this.sendCadena.emit('La cadena');
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>{this.cadena} Hello, World! I'm {this.getText()}</div>;
  }
}
