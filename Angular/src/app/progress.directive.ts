import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgress]'
})
export class ProgressDirective {
  percent: number;

  constructor(el: ElementRef) {
    this.percent = 0;

    let progress = setInterval(() => {
      el.nativeElement.style.width = this.percent + "%";
      this.percent++;
      if (this.percent === 101) {
        clearInterval(progress);
      }
    }, 10);
  }

}
