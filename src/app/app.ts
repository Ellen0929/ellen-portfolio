import { Component } from '@angular/core';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { TechStack } from './features/tech-stack/tech-stack';
import { Experience } from './features/experience/experience';
import { Certifications } from './features/certifications/certifications';
import { Projects } from './features/projects/projects';

@Component({
  imports: [Home, About, TechStack, Experience, Certifications, Projects],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App { }
