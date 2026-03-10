import { Component, OnInit, ElementRef, inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { GtmService } from "../../services/gtm.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private fb = inject(FormBuilder);
  private gtm = inject(GtmService);

  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;

  contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "yuvrajsoni92@gmail.com",
      href: "mailto:yuvrajsoni92@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9785113836",
      href: "tel:+919785113836"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yuvraj-soni-9aa765107",
      href: "https://linkedin.com/in/yuvraj-soni-9aa765107/"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Indore, MP, India",
      href: null
    }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name:    ["", [Validators.required, Validators.minLength(2)]],
      email:   ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(20)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) return;
    this.isSubmitting = true;
    this.gtm.trackContactFormSubmit();
    // Integrate your email service here (e.g., EmailJS, Formspree, or custom API)
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted = false;
      this.contactForm.reset();
      alert("Message sent! I\'ll get back to you soon.");
    }, 1200);
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
