import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToTime'
})
export class IntToTimePipe implements PipeTransform {

  transform(value: BigInteger, ...args: unknown[]): unknown {

    return this.horas(value);
  }
  horas(minutos:any) {
    var horas:number = 0;
    // if(minutos>0){
    // do{
    // minutos=-60;
    // horas++;
    // console.log(`minutos ${minutos}`);
    // }while(minutos>60);
    // }
    // if(minutos<0){
    //   minutos+=60;
    // }
    horas = Math.floor( minutos / 60);
    minutos = minutos %60;
    console.log(`horas ${horas} : minutos ${minutos} costo`);
    var horasString:String;
    var minutosString:String;
    if(horas.toLocaleString().length<2){
      horasString=`0${horas}`;
    }else{
        horasString=`${horas}`;
    }
    console.log(`minutos ${minutos}`);
    if(minutos.toLocaleString().length<2){
        minutosString=`0${minutos}`;
    }else{
      minutosString = `${minutos}`;
    }
    return `${horasString}:${minutosString}`;
  }
}
