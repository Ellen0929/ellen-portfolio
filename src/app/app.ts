import { Component } from '@angular/core';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { TechStack } from './features/tech-stack/tech-stack';

@Component({
  imports: [Home, About, TechStack],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App { }
