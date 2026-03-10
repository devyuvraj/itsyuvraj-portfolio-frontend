import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  navLinks = [
    { label: "About",      href: "#about" },
    { label: "Skills",     href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
    { label: "Contact",    href: "#contact" }
  ];

  scrollTo(href: string): void {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
