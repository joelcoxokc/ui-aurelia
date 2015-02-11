import {Behavior} from 'aurelia-framework';

export class Aside {

    static metadata(){

        return Behaviore
            .withProperty('open')

    }


    constructor(options){

        this.open  = options.open  || false;
        this.side  = options.side  || 'right';
        this.fixed = options.fixed || true;

    }


    toggle(){

        this.open = !this.open;

    }
}
