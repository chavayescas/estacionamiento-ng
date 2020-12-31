import {environment} from 'src/environments/environment';
export class ServerData {

  public static getUrl(endPoint:String){
    return environment.url+":"+environment.port+"/"+environment.prefix+"/"+endPoint;
  }
}
