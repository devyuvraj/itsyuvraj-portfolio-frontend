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

  experiences = [
    {
      company: "Tata Consultancy Services",
      shortName: "TCS",
      role: "Full Stack / MEAN Stack Developer",
      period: "Dec 2022 – Present",
      duration: "3.4 yrs",
      location: "Indore, India",
      domain: "Cruise Line Hospitality",
      url: "https://www.tcs.com",
      isCurrent: true,
      color: "#1B4FD8",
      highlights: [
        "Led end-to-end development of the Cruise Personnel System Admin Panel using Angular 15, PrimeNG & Node.js",
        "Engineered an Airtable-like reporting module with dynamic grouping, inline editing, cloning & real-time config sync",
        "Architected component-driven frontend with lazy loading, shared modules & NgRx-based state management",
        "Developed secure RESTful APIs with Node.js, Express.js & MongoDB for user roles & live data sync",
        "Implemented token-based auth & interceptor-driven error handling for data consistency"
      ],
      tags: ["Angular 15", "PrimeNG", "NgRx", "Node.js", "MongoDB", "RxJS"]
    },
    {
      company: "Xsilica Software Solutions",
      shortName: "Xsilica",
      role: "Full Stack Developer (Angular + Node.js)",
      period: "Sep 2021 – Nov 2022",
      duration: "1.2 yrs",
      location: "Hyderabad, India",
      domain: "Fintech – Payment Gateway",
      url: "https://www.xsilica.com",
      isCurrent: false,
      color: "#0891B2",
      highlights: [
        "Developed the PayG Merchant Dashboard — real-time transaction analytics & settlement management platform",
        "Designed RESTful APIs for payment reconciliation, reporting & payout scheduling",
        "Built reusable Angular components with RxJS services, reducing redundant code by 40%",
        "Implemented JWT-based authentication and role-based access control for fintech compliance",
        "Mentored junior developers and conducted peer reviews improving overall code quality"
      ],
      tags: ["Angular 12", "Node.js", "Angular Material", "JWT", "RxJS", "MongoDB"]
    },
    {
      company: "Ooze IT Solutions Pvt. Ltd.",
      shortName: "Ooze IT",
      role: "Angular Developer",
      period: "Jul 2019 – Aug 2021",
      duration: "2.2 yrs",
      location: "Udaipur, India",
      domain: "eCommerce (Healthcare)",
      url: "https://www.itooze.com",
      isCurrent: false,
      color: "#6366F1",
      highlights: [
        "Developed HPFY.com Admin Panel — a centralized system managing 10+ healthcare eCommerce websites",
        "Engineered product catalog, coupon management, checkout workflows & report generation modules",
        "Designed & integrated RESTful APIs for Angular–.Net communication, improving data sync speed",
        "Collaborated with QA to reduce release turnaround and streamline UAT process",
        "Refactored legacy code with modular architecture, improving platform scalability"
      ],
      tags: ["Angular 7", "TypeScript", "ASP.NET", "MySQL", "REST APIs"]
    }
  ];

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
