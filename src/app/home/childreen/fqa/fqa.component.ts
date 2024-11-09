import { Component } from '@angular/core';

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  styleUrls: ['./fqa.component.scss']
})
export class FqaComponent {
  arr=[
    {question:'كيف أسجل في التطبيق؟',answer:' يمكنك التسجيل من خلال رقم الجوال أو باستخدام بريدك الإلكتروني ثم اتبع الخطوات الموضحة على الشاشة لإكمال التسجيل.',
      number:'flush-collapseOne'},
    {question:'كيف أسجل في التطبيق؟',answer:' يمكنك التسجيل من خلال رقم الجوال أو باستخدام بريدك الإلكتروني ثم اتبع الخطوات الموضحة على الشاشة لإكمال التسجيل.',
      number:'flush-collapseTwo'}
  ]
constructor() {}
}
