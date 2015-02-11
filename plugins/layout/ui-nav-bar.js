import {Behavior}         from 'aurelia-framework';
import {Bar}              from './bar'
import {MsgPublisher}     from './message'
import {MsgSubscriber}    from './message'

export class UiNavBarCustomElement {

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


  attached(){

    console.log(this.aside)

    // console.log('Bar Attached')
  }
  open() {
    this.showing = !this.showing;
  }
}
