import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private apiService: ApiService, private router: Router) {}

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

  onSubmit(){
    const user = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      date_naissance: this.form.value.date_naissance,
      email: this.form.value.email,
      mot_de_passe: this.form.value.mot_de_passe,
      telephone: this.form.value.telephone,
      nationalite: this.form.value.nationalite,
      adresse: this.form.value.adresse
    }
   
    this.apiService.createUser(JSON.stringify(user)).subscribe((response) => console.log(response));
    return this.router.navigate(['/auth/login']);
  }
}
