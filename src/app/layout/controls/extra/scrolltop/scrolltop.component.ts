import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.css']
})
export class ScrolltopComponent implements OnInit {

  extrasScrollTopOffset: any;
  options: any;

  constructor() {}

  ngOnInit(): void {
    // this.extrasScrollTopOffset = this.layout.getProp('extras.scrolltop.offset');
  }

  getScrollTop() {
    return (document.scrollingElement || document.documentElement).scrollTop;
  }

  scrollToTop() {
    this.options = this.extrasScrollTopOffset;
    var pos = this.getScrollTop();
    var body = document.body;
    if (pos > this.options) {
      if (body.hasAttribute('data-scrolltop') === false) {
        body.setAttribute('data-scrolltop', 'on');
      }
    } else {
      if (body.hasAttribute('data-scrolltop') === true) {
        body.removeAttribute('data-scrolltop');
      }
    }
  }

  scroll() {
    scrollTo(0, 0);
  }

  @HostListener('window:scroll', ['$event'])
    scrollHandler(event: any) {
      this.scrollToTop();
    }
}
