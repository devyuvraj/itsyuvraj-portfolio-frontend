import { Component, OnInit, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  animatedBars = false;
  data = inject(DataService);

  getBarClass(level: number): string {
    if (level >= 90) return "bar-expert";
    if (level >= 75) return "bar-advanced";
    return "bar-intermediate";
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          this.animatedBars = true;
        }
      }),
      { threshold: 0.15 }
    );
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el: Element) => obs.observe(el));
    }, 100);
  }
}
