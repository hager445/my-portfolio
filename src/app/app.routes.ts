import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data:{animation:'slide'}

  },
  {
    path: 'home',
    loadComponent: () => import('../home/home.component').then(m => m.HomeComponent),
    data:{animation:'home'}
  },
  {
    path: 'aboutme',
    loadComponent: () => import('../aboutme/aboutme.component').then(m => m.AboutmeComponent),
    data:{animation:'about'}
  },
  {
    path: 'skills',
    loadComponent: () => import('../skills/skills.component').then(m => m.SkillsComponent),
    data:{animation:'skills'}
  },
  {
    path: 'contact',
    loadComponent: () => import('../contact/contact.component').then(m => m.ContactComponent),
    data:{animation:'contact'}
  },
  {
    path: 'projects',
    loadComponent: () => import('../projects/projects.component').then(m => m.ProjectsComponent),
    data:{animation:'project'}
  },
  {
    path: '**',
    redirectTo: 'home'
    ,    data:{animation:'home'}
  }
];

