import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[sum]',
})
export class SumDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('sumFrom')
  from = 0;

  @Input('sumAnd')
  and = 0;

  @Input('sumDesc')
  desc = '';

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: this.from + this.and,
    });

    console.log(this.desc);
  }
}
