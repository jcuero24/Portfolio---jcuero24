import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly languageService = inject(LanguageService);
}
