import {Directive, HostListener} from '@angular/core';
import {Location} from '@angular/common';

/**
 * Source: https://stackoverflow.com/a/52735465
 */
@Directive({
  selector: '[appBackButton]'
})
export class AppBackButtonDirective {

  constructor(private location: Location) {
  }

  @HostListener('click')
  onClick(): void {
    this.location.back();
  }
}
