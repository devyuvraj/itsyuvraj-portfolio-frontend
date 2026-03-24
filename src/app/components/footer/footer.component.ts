import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  data = inject(DataService);
  currentYear = new Date().getFullYear();

  scrollTo(href: string): void {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
