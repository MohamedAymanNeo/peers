import { Directive, ElementRef, Input} from '@angular/core';
import { svgModel } from './svg-model';

@Directive({
  selector: '[svgIcon]',
  standalone: true,
})
export class SvgInlineDirective {
  constructor( private _el: ElementRef) {}

  @Input() svgIcon: any;
  svgModelEnum: any = svgModel;

  ngOnInit(): void {
    this.getSVGPath();
  }

  svgpath: any;
  getSVGPath() {
    this.svgpath = this._el.nativeElement.getAttribute('svgIcon');
    this._el.nativeElement.innerHTML = this.svgModelEnum[this.svgIcon];
    return this.svgModelEnum[this.svgIcon];
  }
}
