import {Behavior}         from 'aurelia-framework';
import {Bar}              from './bar'
import {MsgPublisher}     from './message'
import {MsgSubscriber}    from './message'
import {UiElement}        from './ui-element';

export class UiNavBarCustomElement extends UiElement {


    static metadata(){

       return Behavior
         .withProperty('router')
         .withProperty('aside')
         .withProperty('showing')


    }


    static inject() {

      return [Element]

    }


    constructor(element){

      this.showing = false
      this.barId   = 'bar1'
      this.open    = false
      this.fixed   = true
      this.size    = 'sm'
      this.ripple  = true;
    }

    bind(){
    }

    open(){

        this.showing = !this.showing;

    }

}
