import { Component } from '@angular/core';
import { Home } from './features/home/home';

@Component({
  imports: [Home],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
