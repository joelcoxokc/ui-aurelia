import {Behavior} from 'aurelia-framework';

export class Bar {

    static metadata(){

        return Behavior
            .withProperty('open')

    }


    constructor(options){

    }


    activate(options){


        this.barId = options.barId
        this.open  = options.open  || false;
        this.side  = options.side  || 'right';
        this.fixed = options.fixed || true;
    }

    toggle(){

        this.open = !this.open;

    }
}
