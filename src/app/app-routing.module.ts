import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
