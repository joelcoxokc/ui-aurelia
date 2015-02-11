import {Behavior} from 'aurelia-templating';

export class UiAurelia {
  static metadata(){
    return Behavior
      .attachedBehavior('ui-aurelia')
      .withProperty('value', 'valueChanged', 'ui-aurelia')
      ;
  }

  static inject() { return [Element]; }

  constructor(element) {
    this.element = element;
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
