import {Behavior} from 'aurelia-templating';
import {Aside}    from './aside'

var defaults = {
  asideId : 'aside1',
  side    : 'left'  ,
  open    : false   ,
  fixed   : true
}

export class UiNavAsideCustomElement {


    static metadata(){

        return Behavior
              .withProperty('open')
              .withProperty('fixed')
              .withProperty('side')
              .withProperty('size')

    }

    static inject () {

          return [Element]

    }

    constructor(element){


        this.element = element


        this.addClass = function(){
            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
            this.element.classList.add.apply(this.element.classList, args)

        }


        this.removeClass = function(){

          var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
          this.element.classList.remove.apply(this.element.classList, args)

        }

    }


    bind(){

        var classList = ['ui-aside', 'ui-aside-nav', `aside-${this.side}`]
        this.fixed && classList.push('aside-fixed')
        this.addClass(classList)

    }


    openChanged(newValue){
      console.log(newValue)
      if(newValue) {
          this.addClass('aside-open') }
      else {
         this.removeClass('aside-open') }

    }


}
