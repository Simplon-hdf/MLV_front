import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        
    ],
    exports: [RegisterComponent],
})
export class RegisterModule { }
