import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let dataLayer: any[];

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class GtmService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  pushEvent(event: GTMEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(event);
    }
  }

  trackPageView(url: string, title: string): void {
    this.pushEvent({
      event: 'page_view',
      page_path: url,
      page_title: title
    });
  }

  trackContactFormSubmit(): void {
    this.pushEvent({
      event: 'contact_form_submit',
      event_category: 'Contact',
      event_action: 'Form Submit',
      event_label: 'Portfolio Contact Form'
    });
  }

  trackProjectClick(projectName: string): void {
    this.pushEvent({
      event: 'project_click',
      event_category: 'Projects',
      event_action: 'Click',
      event_label: projectName
    });
  }

  trackResumeDownload(): void {
    this.pushEvent({
      event: 'resume_download',
      event_category: 'Resume',
      event_action: 'Download',
      event_label: 'CV Download'
    });
  }

  trackSectionView(sectionName: string): void {
    this.pushEvent({
      event: 'section_view',
      event_category: 'Engagement',
      event_action: 'Section Viewed',
      event_label: sectionName
    });
  }
}
