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
