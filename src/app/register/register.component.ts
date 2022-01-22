import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EwalletserviceService } from '../shared/ewalletservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg:string;
  errormsg:string;
  constructor(private ewalletService:EwalletserviceService,private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();

  }


OnSubmit(LoginName:string,UserFullName:string,AadhaarNumber:number,PhoneNumber:number,Password:string){

  this.ewalletService.insertParticipant(LoginName,UserFullName,AadhaarNumber,PhoneNumber,Password).subscribe(
   ( data:any)=>{
        localStorage.clear();
        localStorage.setItem('returned',data);
      this.msg='your account is successfully created and your account id is '+data.accountId;
      alert('your account is successfully created and your account id is '+data.accountId);
      this.errormsg=undefined;
      this.route.navigate(['/login'])
    }

   ,
   (error:any)=>{
     console.log(error);
     this.errormsg=error.error.message;
     this.msg=undefined;
     alert(error.error.message);
    }
     )
   }
   
   
   
   
}

