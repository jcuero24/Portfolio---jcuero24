import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  imports: [RevealOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly languageService = inject(LanguageService);
}
