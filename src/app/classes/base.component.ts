

export class BaseComponent{
  checkEnter(event:any, func:string, ...args:any[]){
    if(event.which === 13){
      args.unshift(event);
      (<any>this)[func].apply(this, args);
    }
  }
}
