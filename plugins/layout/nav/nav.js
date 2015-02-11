import {Behavior} from 'aurelia-framework';
import {Aside}    from './aside'
import {Bar}    from './bar'

export class Nav {

    static metadata(){

        return Behaviore
            .withProperty('open')

    }

    static inject() {

        return [Aside, Bar]

    }

    constructor(aside, bar){
        this.$aside = aside
        this.$bar   = bar
    }


    toggle(){

        this.open = !this.open;

    }
}
