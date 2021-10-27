import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../Services/token.service';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent {
  public router: Router;
  constructor(router:Router,
    private Token:TokenService,
    private Auth:AuthService
    ) {

      this.router = router;
      this.Token.remove();
      this.Auth.changeAuthStatus(false);
      this.router.navigate(['login']);
  }


}
