import {Behavior} from 'aurelia-templating';
import {Nav}      from './ui-nav'

export class UiAurelia {

    static metadata(){

        return Behavior
            .attachedBehavior('ui-aurelia')
            .withProperty('value', 'valueChanged', 'ui-aurelia')
            ;

    }

    static inject() {

        return [Element, Nav];

    }

    constructor(element, nav) {
        this.nav     = nav
        this.element = element
    }


    activate(){

        console.log(this)

    }


    bind () {

        this.valueChanged(this.value);
        console.log('ui-class', this)
    }


    valueChanged(newValue){
        Object.keys(newValue).forEach(className => {
            this.element.classList[newValue[className] ? 'add' : 'remove'](className);
        });
    }
}
