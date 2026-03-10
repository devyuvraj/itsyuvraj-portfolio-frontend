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

  skillGroups = [
    {
      category: "Frontend", icon: "🖥️",
      skills: [
        { name: "Angular (v2–v17)", level: 97 },
        { name: "TypeScript", level: 94 },
        { name: "RxJS", level: 90 },
        { name: "NgRx", level: 87 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "PrimeNG / Angular Material", level: 88 }
      ]
    },
    {
      category: "Backend", icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 95 },
        { name: "Microservices", level: 82 },
        { name: "PHP / Laravel", level: 72 }
      ]
    },
    {
      category: "Database", icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "DevOps & Tools", icon: "🛠️",
      skills: [
        { name: "Git / GitHub", level: 92 },
        { name: "Azure", level: 75 },
        { name: "AWS (Basic)", level: 65 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Postman", level: 88 }
      ]
    }
  ];

  badges = [
    "Angular CLI", "Lazy Loading", "JWT Auth", "Interceptors", "Guards",
    "State Management", "Change Detection", "SSR", "Performance Tuning",
    "Code Reviews", "Mentoring", "Sprint Planning", "CI/CD", "REST Design"
  ];

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
