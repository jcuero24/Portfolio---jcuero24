import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly languageService = inject(LanguageService);
}
