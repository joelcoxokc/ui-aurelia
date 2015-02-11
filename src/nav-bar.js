import {Behavior} from 'aurelia-framework';

export class NavBar {
  static inject() {return [Element]}
  static metadata(){
     return Behavior
       .withProperty('router')
       .withProperty('aside')

   }
  constructor(element){
    this.showing = false
    this.element = element;
  }
  open() {
    this.showing = !this.showing;
  }
}
