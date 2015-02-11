import {Behavior} from 'aurelia-templating';
import {Nav}      from './Nav'

export class UiNavAside {


    static metadata(){

        return Behavior
              .withProperty('value')
              .withProperty('open')
              .withProperty('fixed')
              .withProperty('side')

    }

    static inject() {

          return [Element]

    }

    constructor(element){
        this.element = element
        // this.showing = false;
        // this.open    = false;
        // this.size    = false;
        // this.fixed   = true;

        this.addClass = function(){
            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
            this.element.classList.add.apply(this.element.classList, args)

        }


        this.removeClass = function(){

          var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
          this.element.classList.remove.apply(this.element.classList, args)

        }

    }


    attached(element){
        var classList = ['ui-aside', 'ui-aside-nav', `aside-${this.side}`]
        this.fixed && classList.push('aside-fixed')
        this.addClass(classList)

    }


    activate(){
        // console.log(this)

    }


    bind(){
        // console.log(this)

    }


    openChanged(newValue){

      if(newValue) {
          this.addClass('aside-open') }
      else {
         this.removeClass('aside-open') }

    }


}
