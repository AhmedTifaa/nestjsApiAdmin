import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { JarwisService } from '../../Services/jarwis.service';
import { TokenService } from '../../Services/token.service';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public router: Router;
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public error = null;
  constructor(router:Router, fb:FormBuilder,private jarwis:JarwisService,
    private Token:TokenService,
    private Auth:AuthService
    ) {

      this.router = router;
      this.form = fb.group({
          'email': ['', Validators.compose([Validators.required, CustomValidators.email])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });

      this.email = this.form.controls['email'];
      this.password = this.form.controls['password'];

  }
  ngOnInit() {

   }

  public onSubmit(values:Object):void {
     this.form.controls['email'].markAsTouched();
     this.form.controls['password'].markAsTouched();
      if (this.form.valid) {
        if(this.jarwis.login(values)){
          this.handleResponse(values);
        }else{
          this.handleError("Invalid Account Credentials");
        }
      }
  }
  handleResponse(data){
    this.Token.handle(data);
    this.Auth.changeAuthStatus(true);
    this.router.navigate(['pages']);
  }

  handleError(eror) {
    this.error = eror;
  }

}
