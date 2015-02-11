import {Behavior} from 'aurelia-framework';
import {Aside}    from './aside'
import {Bar}    from './aside'

export class Nav {

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
