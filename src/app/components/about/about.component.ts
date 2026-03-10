import { Component, OnInit, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  data = inject(DataService);

  highlights = [
    { icon: "🎯", title: "Enterprise Focus", desc: "Built complex admin panels and dashboards serving thousands of users across fintech, hospitality, and healthcare domains." },
    { icon: "🏗️", title: "Architecture First", desc: "Expert in lazy loading, NgRx state management, modular architecture, and scalable component-driven design patterns." },
    { icon: "⚡", title: "Performance Driven", desc: "Specialized in Angular change detection optimization, lazy data rendering, and API performance tuning for enterprise scale." }
  ];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el: Element) => obs.observe(el));
    }, 100);
  }
}
