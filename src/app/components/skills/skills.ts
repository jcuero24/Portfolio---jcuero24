import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly languageService = inject(LanguageService);
}
