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

  projects = [
    {
      title: "Cruise Personnel System",
      subtitle: "Airtable-like Enterprise Admin Panel",
      company: "Tata Consultancy Services",
      category: "Enterprise App",
      categoryColor: "#1B4FD8",
      description: "A complex, configurable data management platform for cruise line operations. Built replicating Airtable-like functionality with advanced grid features serving multi-department enterprise workflows at scale.",
      highlights: [
        "Dynamic grouping, inline editing & real-time config sync",
        "NgRx state management with lazy loading architecture",
        "Advanced Angular change detection optimization",
        "Token-based auth with interceptor-driven error handling"
      ],
      stack: ["Angular 15", "PrimeNG", "RxJS", "NgRx", "Node.js", "Express.js", "MongoDB"],
      accentColor: "#1B4FD8",
      gradientFrom: "#EFF6FF",
      gradientTo: "#DBEAFE",
      emoji: "🚢"
    },
    {
      title: "PayG Merchant Dashboard",
      subtitle: "Real-time Fintech Analytics Platform",
      company: "Xsilica Software Solutions",
      category: "Fintech",
      categoryColor: "#0891B2",
      description: "A secure, real-time dashboard for merchants to manage transactions, settlements, and payout analytics. Improved transaction visibility and reduced downtime for merchant partners across the payment gateway.",
      highlights: [
        "Real-time transaction tracking & settlement management",
        "Reusable Angular components reducing code by 40%",
        "JWT authentication with role-based access control",
        "RxJS-based services for smooth API-driven performance"
      ],
      stack: ["Angular 12", "Node.js", "Angular Material", "Express.js", "JWT", "MongoDB"],
      accentColor: "#0891B2",
      gradientFrom: "#ECFEFF",
      gradientTo: "#CFFAFE",
      emoji: "💳"
    },
    {
      title: "HPFY.com Admin Panel",
      subtitle: "Multi-site Healthcare eCommerce Manager",
      company: "Ooze IT Solutions",
      category: "eCommerce",
      categoryColor: "#6366F1",
      description: "A centralized admin panel managing 10+ healthcare eCommerce websites. Streamlined product catalog, coupon management, checkout workflows, and reporting across all portal properties.",
      highlights: [
        "Centralized management for 10+ healthcare portals",
        "Product catalog, coupons & checkout workflow modules",
        "Angular–.Net API integration for faster data sync",
        "Legacy code refactoring with modular architecture"
      ],
      stack: ["Angular 7", "TypeScript", "ASP.NET", "MySQL", "REST APIs"],
      accentColor: "#6366F1",
      gradientFrom: "#EEF2FF",
      gradientTo: "#E0E7FF",
      emoji: "🏥"
    }
  ];

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
