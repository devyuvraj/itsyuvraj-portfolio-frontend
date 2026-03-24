import { Component, OnInit, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  data = inject(DataService);

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
