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

  public user: User;
  private mockSesame = '013';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      identifiant: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      motDePasse: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.login(this.formLogin.get('identifiant').value, this.formLogin.get('motDePasse').value);
    }
  }

  login(id: string, pwd: string) {
    this.loginService.getUser(id, pwd).subscribe(
      data => {
        if (data.password === pwd) {
          this.dataService.$user = data;
          this.router.navigate(['']);
        }
      },
      error => {
        console.log('##login ## cant find user');
      }
    );
  }
}
