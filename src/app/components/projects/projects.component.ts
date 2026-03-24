import { Component, OnInit, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { GtmService } from "../../services/gtm.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private gtm = inject(GtmService);
  data = inject(DataService);

  trackProject(title: string): void {
    this.gtm.trackProjectClick(title);
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el: Element) => obs.observe(el));
    }, 100);
  }
}
