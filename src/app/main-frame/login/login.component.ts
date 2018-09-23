import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,  } from '@angular/forms';
import { DataService } from '../../shared/dataService/data.service';
import { Router } from '@angular/router';
import { LoginService } from './login-service/login.service';
import { User } from '../../shared/dto/user';

@Component({
  selector: 'dmab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public fb: FormBuilder;
  public ls: LoginService;
  public ds: DataService;
  public router: Router;

  public user: User;
  private mockSesame = '013';

  constructor(
    formBuilder: FormBuilder,
    loginService: LoginService,
    dataService: DataService,
    router: Router
  ) {
    this.fb = formBuilder;
    this.ls = loginService;
    this.ds = dataService;
    this.router = router;
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      identifiant: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      motDePasse: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }


  /* JE DOIS TRAVAILLER SUR LA PARTIE APPEL DE SERVICE PUIS MOCK POUR FAIRE COMME SI L'UTILISATEUR S'ETAIT CONNECTE */

  onSubmit() {
    if (this.formLogin.valid) {
      const identifiant: string = this.formLogin.get('identifiant').value;
      const motDePasse: string = this.formLogin.get('motDePasse').value;
      if (this.checkAuthorization(identifiant, motDePasse)) {
        this.ds.$user = this.user;
        this.ds.$user.nickname = identifiant;
        this.router.navigate(['home']);
      }
    }
  }

  checkAuthorization(id: string, pwd: string): boolean {

    return pwd === this.mockSesame ? true : false;
  }

  login() {

  }
}
