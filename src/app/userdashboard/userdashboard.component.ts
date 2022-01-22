import { Component, OnInit, OnDestroy } from '@angular/core';
import { EwalletserviceService } from '../shared/ewalletservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit ,OnDestroy{

  userName:string;
  password:string;
  aadhaarNo:number;
  phoneNumber:number;
  loginName:string
  userData:any[];
  updatesection:boolean=false;

  constructor(private ewalletService:EwalletserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  

Update(){
this.userData=this.ewalletService.userData;
this.password=this.userData['password'];
this.aadhaarNo=this.userData['aadhaarNo'];
this.loginName=this.userData['loginName'];
this.userName=this.userData['userName'];
this.phoneNumber=this.userData['phoneNumber'];
this.updatesection=!this.updatesection;

}

OnSubmit(LoginName:string,UserFullName:string,AadhaarNumber:number,Password:string){
  this.updatesection=false;

  this.ewalletService.updateParticipant(LoginName,UserFullName,AadhaarNumber,this.phoneNumber,Password).subscribe(
   ( data:any)=>{
    this.userData=this.ewalletService.userData;
    this.password=this.userData['password'];
    this.aadhaarNo=this.userData['aadhaarNo'];
    this.loginName=this.userData['loginName'];
    this.userName=this.userData['userName'];
    this.phoneNumber=this.userData['phoneNumber'];
        localStorage.clear();
        localStorage.setItem('returned',data);
        console.log(data);
        if(data!=null){
      alert("you have successfully updated!");
      }

   },
   error=>{
     alert(error.error.message);

   }
   
   )  
}

Logout(){
localStorage.clear();
this.route.navigate(['/login']);

}


  ngOnDestroy():void{
      
    localStorage.clear();
  }

}
