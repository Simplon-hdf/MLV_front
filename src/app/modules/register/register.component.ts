import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}
  private apiUrl = 'http://localhost:3000/auth/signup/jeune';

  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    date_naissance: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mot_de_passe: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    nationalite: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
  });


  async onSubmit() {
    const Users = {
      nom: this.form.value.nom || '',
      prenom: this.form.value.prenom || '',
      date_naissance: new Date() || '',
      email: this.form.value.email || '',
      mot_de_passe: this.form.value.mot_de_passe || '',
      telephone: this.form.value.telephone  || '',
      nationalite: this.form.value.nationalite  || '',
      adresse: this.form.value.adresse || '',

    }
    //create user post request

    let reponse =  this.httpClient.post(this.apiUrl, Users)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);

        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
    return this.router.navigate(['/login']);
  }
}
