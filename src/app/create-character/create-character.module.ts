import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDefinedCharacterComponent } from './user-defined-character/user-defined-character.component';
import { PreDefinedCharacterComponent } from './pre-defined-character/pre-defined-character.component';
import { CreateCharacterComponent } from './create-character.component';


@NgModule({
  declarations: [
    CreateCharacterComponent,
    UserDefinedCharacterComponent,
    PreDefinedCharacterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ]),
  ]
})
export class CreateCharacterModule { }
