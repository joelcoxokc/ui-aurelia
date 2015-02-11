import {Behavior} from 'aurelia-framework';

export class Aside {

    static metadata(){

        return Behavior
            .withProperty('open')

    }


    constructor(){


    }

    activate(options){
        this.asideId = options.asideId
        this.open    = options.open  || false;
        this.side    = options.side  || 'right';
        this.fixed   = options.fixed || true;
        console.log('Aside Activated')

    }


    toggle(){

        this.open = !this.open;

    }
}
