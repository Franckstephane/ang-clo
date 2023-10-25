import { Component } from '@angular/core';
import { AuthServiceService } from '../auth.service.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export default class AuthComponent {

  constructor(private authServiveService:AuthServiceService){};

  onSubmit(login:string, password:string){
    console.log(login,password)
    this.authServiveService.login({login, password}).subscribe(
      (Response)=>{
        console.log(Response);
      if(!Response.error){
        const token = Response.data.token;

        localStorage.setItem('token',token);
        location.assign('./')
      } else{
        
      }

       
      }
    )
  }

}
