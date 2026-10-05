import { Component, HostListener, inject } from '@angular/core';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Experience, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly languageService = inject(LanguageService);
  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 360;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
