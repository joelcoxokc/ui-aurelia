import {Behavior, BoundViewFactory, ViewSlot} from 'aurelia-templating'

  export class AsideToggleTemplateController {
    static metadata(){
        return Behavior
          .templateController('aside-toggle')
          .withProperty('value', 'valueChanged', 'aside-toggle');
          // .withProperty('icon')
          // .withProperty('aside')
    }

    static inject() {

        return [BoundViewFactory, ViewSlot]

      }


    // constructor(element){
    constructor(viewFactory, viewSlot){

        this.viewFactory = viewFactory;
        this.viewSlot    = viewSlot;
        this.showing     = false;
        // this.element = element;

    }

    valueChanged(val){
      console.log(this.view)
      // if(!val){
      //   if(this.view){
      //     console.log('viewSlot', this.viewSlot)
      //     console.log('view', viewSlot)
      //   }
      //   console.log(val)
      //   this.showing = false;
      //   return
      // }
      // if (!this.view) {
      //   this.view = this.viewFactory.create()
      // }

      // this.view.bind()
      // this.viewSlot.add(this.view);

    }

    attached(){

      console.log(this)
      this.element.classList.add('aside-toggle')

    }

    toggle(){
      this.aside.toggle();
    }
  }
