import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EwalletserviceService {
  userData:any[];
  constructor(private http:HttpClient) { }



  
insertParticipant(LoginName:string,UserFullName:string,AadhaarNumber:number,PhoneNumber:number,Password:string){
  var body={
    userName:UserFullName,
    password:Password,
    aadhaarNo:AadhaarNumber,
    phoneNumber:PhoneNumber,
    loginName:LoginName
  }
  return this.http.post('http://localhost:9084/wallet/adduser',body);
  }




  authParticipant(loginName:string,password:string){


    return this.http.get('http://localhost:9084/wallet/validLogin/'+loginName+'/'+password);
    }
  
  

    updateParticipant(LoginName:string,UserFullName:string,AadhaarNumber:number,PhoneNumber:number,Password:string){
      var body={
        userName:UserFullName,
        password:Password,
        aadhaarNo:AadhaarNumber,
        phoneNumber:PhoneNumber,
        loginName:LoginName
      }
      return this.http.put('http://localhost:9084/wallet//updateUser',body);
      }
    



}
