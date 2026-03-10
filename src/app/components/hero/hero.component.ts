
import { Component, OnInit, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { GtmService } from "../../services/gtm.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private gtm = inject(GtmService);
  private el = inject(ElementRef);
  data = inject(DataService);

  words = ["Angular Expert", "MEAN Stack Dev", "Full Stack Engineer", "UI Architect"];
  currentWord = 0;
  displayText = "";
  isDeleting = false;

  stats = [
    { value: "7+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "10+", label: "Projects Delivered" },
    { value: "17", label: "Angular Versions" }
  ];

  // ✅ REPLACE WITH THIS
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.typeWriter();
    const revealEls: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealEls.forEach((el: HTMLElement, i: number) => {
      setTimeout(() => el.classList.add('visible'), 80 + i * 120);
    });
  }

  private typeWriter(): void {
    const word = this.words[this.currentWord];
    const speed = this.isDeleting ? 60 : 110;

    if (!this.isDeleting) {
      this.displayText = word.substring(0, this.displayText.length + 1);
      if (this.displayText === word) {
        setTimeout(() => { this.isDeleting = true; this.typeWriter(); }, 2000);
        return;
      }
    } else {
      this.displayText = word.substring(0, this.displayText.length - 1);
      if (!this.displayText) {
        this.isDeleting = false;
        this.currentWord = (this.currentWord + 1) % this.words.length;
      }
    }
    setTimeout(() => this.typeWriter(), speed);
  }

  scrollToContact(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      this.gtm.trackSectionView("contact_from_hero");
    }
  }

  downloadResume(): void {
    this.gtm.trackResumeDownload();
    const link = document.createElement("a");
    link.href = "assets/Yuvraj_Soni_Resume.pdf";
    link.download = "Yuvraj_Soni_Resume.pdf";
    link.click();
  }
}
