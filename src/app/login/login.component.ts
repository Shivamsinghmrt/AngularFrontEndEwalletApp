import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EwalletserviceService } from '../shared/ewalletservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private ewalletService:EwalletserviceService,private route:Router) { }
  

  ngOnInit(): void {
    localStorage.clear();
  }

  OnSubmit(loginname:string,password:string){

    this.ewalletService.authParticipant(loginname,password).subscribe(
      ( data:any)=>{
        
      
           localStorage.clear();
           localStorage.setItem('auth',data);
           this.ewalletService.userData=data;
           if(localStorage.getItem('auth')==null){
             localStorage.clear();
           this.route.navigate(['/']);
          }
          else
          {         
            this.route.navigate(['/userdashboard'])
          }
           
      },
      (error :any)=>{
        alert(error.error.message);
        
      }
     )
   

  }


}
