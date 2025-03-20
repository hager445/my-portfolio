import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule , Home, Info, ChevronsLeftRightEllipsis, Notebook, UserPen } from 'lucide-angular';

@Component({
  selector: 'app-routerbar',
  imports: [LucideAngularModule , RouterLink],
  templateUrl: './routerbar.component.html',
  styleUrl: './routerbar.component.css'
})
export class RouterbarComponent {
  readonly homeIcon = Home;
  readonly infoIcon = Info;
  readonly projectsIcon = ChevronsLeftRightEllipsis;
  readonly skillsIcon = UserPen;
  readonly contactIcon = Notebook;
}
