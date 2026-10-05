import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly languageService = inject(LanguageService);
  readonly darkMode = signal(false);
  readonly navHidden = signal(false);
  private lastScrollY = 0;

  constructor() {
    const isDark = localStorage.getItem('portfolio-theme') === 'dark';
    this.darkMode.set(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    const isDark = !this.darkMode();
    this.darkMode.set(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }

  toggleLanguage(): void {
    this.languageService.toggle();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const currentY = window.scrollY;
    const scrollingUp = currentY < this.lastScrollY;
    this.navHidden.set(currentY > 120 && !scrollingUp);
    this.lastScrollY = currentY;
  }
}
