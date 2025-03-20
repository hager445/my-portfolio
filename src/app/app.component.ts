import { Component, OnInit } from '@angular/core';
import {  NgxParticlesModule } from "@tsparticles/angular"; // ✅ تأكد من استخدام NgParticlesModule
import { loadSlim } from "@tsparticles/slim"; // ✅ تحميل المكتبة المصغرة
import { Engine, Container } from "@tsparticles/engine"; // ✅ إضافة المحرك والجسيمات
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { RouterbarComponent } from "../shared/routerbar/routerbar.component";
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../core/services/flowbite/flowbite.service';
import { routeAnimations } from './animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxParticlesModule, RouterOutlet, RouterbarComponent ], 
  animations:[routeAnimations],// ✅ استيراد الموديول الصحيح
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id = "tsparticles";
  constructor(private flowbiteService: FlowbiteService , private contexts: ChildrenOutletContexts) {}

  particlesOptions = {
    background: {
      color: { value: "#000" }, // ✅ لون الخلفية
    },
    fpsLimit: 120, // ✅ تحديد الحد الأقصى للإطارات
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" }, // ✅ تأثير عند النقر
        onHover: { enable: false, mode: "repulse" }, // ✅ تأثير عند التحويم
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 200},
      opacity: { value: 0.5 },
      shape: { type: "star" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  
  async ngOnInit() {
    const { tsParticles } = await import("@tsparticles/engine"); // ✅ استخراج `tsParticles` بشكل صحيح
    await loadSlim(tsParticles);
    this.flowbiteService.loadFlowbite(() => {
      initFlowbite();
    });
  }
  
  particlesLoaded(container: Container): void {
    console.log("Particles Loaded", container);
  }


  // ==============
  getRouteAnimationData():any{
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']}

}



