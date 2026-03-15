import { Component, OnInit, ElementRef, ViewChild, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

interface Message {
  role: "bot" | "user";
  text: string;
  isTyping?: boolean;
}

const SYSTEM_PROMPT = `You are an AI assistant for Yuvraj Soni's portfolio website. Answer questions about Yuvraj professionally and concisely.

PERSONAL INFO:
- Name: Yuvraj Soni
- Email: yuvrajsoni92@gmail.com
- Phone: +91 9785113836
- Location: Indore, Madhya Pradesh, India
- LinkedIn: linkedin.com/in/yuvraj-soni-9aa765107/
- Portfolio: itsyuvraj.com

EXPERIENCE: 6.8+ years as Full Stack / MEAN Stack Developer

CURRENT ROLE:
- Company: Tata Consultancy Services (TCS), Dec 2022 – Present
- Domain: Cruise Line Hospitality
- Led Cruise Personnel System Admin Panel using Angular 15, PrimeNG, Node.js
- Built Airtable-like reporting module with dynamic grouping, inline editing, real-time config sync
- NgRx state management, lazy loading, token-based auth, interceptor-driven error handling

PREVIOUS ROLES:
1. Xsilica Software Solutions (Sep 2021 – Nov 2022, Hyderabad) — Fintech/Payment Gateway
   - PayG Merchant Dashboard with Angular 12, Node.js, Angular Material
   - Reduced redundant code by 40%, JWT auth, role-based access control
2. Ooze IT Solutions (Jul 2019 – Aug 2021, Udaipur) — Healthcare eCommerce
   - HPFY.com Admin Panel managing 10+ healthcare eCommerce websites
   - Angular 7, ASP.NET, MySQL

TECHNICAL SKILLS:
- Frontend: Angular (v2–v17), TypeScript, RxJS, NgRx, HTML5, CSS3, PrimeNG, Angular Material
- Backend: Node.js, Express.js, RESTful APIs, Microservices, PHP, Laravel
- Database: MongoDB, MySQL
- DevOps: Git, GitHub, Azure, AWS (basic), Agile/Scrum, Postman

KEY PROJECTS:
1. Cruise Personnel System (TCS) — Airtable-like enterprise data grid
2. PayG Merchant Dashboard (Xsilica) — Real-time fintech analytics
3. HPFY.com Admin Panel (Ooze IT) — Multi-site healthcare eCommerce manager

EDUCATION:
- MCA: Rajasthan Vidyapeeth, Udaipur (2016–2018)
- BCA: Mohanlal Sukhadia University, Udaipur (2011–2016)

ACHIEVEMENTS: Star of the Sprint at TCS for technical excellence

AVAILABILITY: Open to full-time roles, contract work, and consulting.

RULES:
- Keep answers to 2–3 sentences max. Be professional and enthusiastic.
- For salary, notice period, or anything private → say "Please use the contact form at itsyuvraj.com and Yuvraj will respond within 24 hours."
- Never make up information not listed above.`;

@Component({
  selector: "app-chat-widget",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./chat-widget.component.html",
  styleUrls: ["./chat-widget.component.scss"]
})
export class ChatWidgetComponent implements OnInit {
  @ViewChild("messagesContainer") messagesContainer!: ElementRef;
  @ViewChild("inputRef") inputRef!: ElementRef;

  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  
  Math = Math;
  isOpen = false;
  isTyping = false;
  inputText = "";

  messages: Message[] = [
    {
      role: "bot",
      text: "👋 Hi! I\'m Yuvraj\'s AI assistant. Ask me about his experience, skills, projects, or availability!"
    }
  ];

  suggestions = [
    "Angular experience?",
    "Current role at TCS?",
    "Available for hire?",
    "Top projects?"
  ];
  showSuggestions = true;

  // Keep conversation history for Claude API
  private history: { role: string; content: string }[] = [];

  ngOnInit(): void {}

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.inputRef?.nativeElement?.focus(), 300);
    }
  }

  sendSuggestion(text: string): void {
    this.showSuggestions = false;
    this.inputText = text;
    this.send();
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  send(): void {
    const text = this.inputText.trim();
    if (!text || this.isTyping) return;

    this.inputText = "";
    this.showSuggestions = false;

    // Add user message
    this.messages.push({ role: "user", text });
    this.history.push({ role: "user", content: text });
    this.scrollToBottom();

    // Show typing indicator
    this.isTyping = true;
    this.messages.push({ role: "bot", text: "", isTyping: true });
    this.scrollToBottom();

    // Call Claude API via your Vercel proxy
    this.http.post<any>("/api/chat", {
      messages: this.history,
      system: SYSTEM_PROMPT
    }).subscribe({
      next: (res) => {
        const reply = res.reply || "I\'m having trouble right now. Please email yuvrajsoni92@gmail.com directly!";
        this.removeTyping();
        this.messages.push({ role: "bot", text: reply });
        this.history.push({ role: "assistant", content: reply });
        this.isTyping = false;
        this.scrollToBottom();
      },
      error: () => {
        this.removeTyping();
        this.messages.push({
          role: "bot",
          text: "Sorry, something went wrong! Please reach Yuvraj at yuvrajsoni92@gmail.com 😊"
        });
        this.isTyping = false;
        this.scrollToBottom();
      }
    });
  }

  private removeTyping(): void {
    const idx = this.messages.findIndex(m => m.isTyping);
    if (idx > -1) this.messages.splice(idx, 1);
  }

  private scrollToBottom(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      const el = this.messagesContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }
}
