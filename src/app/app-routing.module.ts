import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path: 'quiz', component:QuizComponent},
  {path: 'review', component:ReviewComponent},
  {path: 'result', component:ResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
