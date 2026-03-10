import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {

  // ✅ UPDATE EVERYTHING FROM HERE ONLY
  readonly profile = {
    name:          'Yuvraj Soni',
    role:          'Full Stack / MEAN Stack Developer',
    email:         'yuvrajsoni92@gmail.com',
    phone:         '+91 9785113836',
    location:      'Indore, Madhya Pradesh, India',
    linkedin:      'https://linkedin.com/in/yuvraj-soni-9aa765107/',
    experience:    '7',   // ← change here, updates hero + about + OG
    companies:     '3',
    projects:      '10+',
    angularYears:  '17',
    currentCompany:'Tata Consultancy Services (TCS)',
    currentPeriod: 'Dec 2022 – Present',
    available:     true,
  };
}