import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly languageService = inject(LanguageService);
}
