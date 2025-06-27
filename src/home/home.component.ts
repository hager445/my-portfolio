import { Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { LucideAngularModule , Home, Info, ChevronsLeftRightEllipsis, Notebook, UserPen } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 


@ViewChild('typedContainer') typedContainer!:ElementRef;

ngAfterViewInit() {
  const options = {
    strings: [
      "Crafting Stunning User Interfaces ✨",
      "Building Interactive Web Experiences 🚀",
      "Passionate About Angular ❤️",
      "Turning Ideas Into Reality with Code 💡"
    ]
    ,
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  };

  new Typed(this.typedContainer.nativeElement, options);
}
downloadFile():void{
 const link = document.createElement('a');
 link.href = "/assets/hager's resume.pdf"
 link.download = 'cv.pdf'
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
}
}
