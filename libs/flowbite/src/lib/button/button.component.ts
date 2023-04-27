import { Component, HostBinding, Input } from '@angular/core';
import { FbButtonSize, FbButtonType } from './typings';

@Component({
  selector: 'input[fbButton],a[fbButton]',
  exportAs: 'AtButton',
  template: `<ng-content></ng-content> `,
})
export class AtButtonComponent {
  @Input()
  atLoading = false;

  @Input()
  atType: FbButtonType = 'primary';

  @Input()
  atSize: FbButtonSize = 'default';

  @HostBinding('[class.fb-btn-primary]')
  get primary() {
    return this.atType === 'primary';
  }

  @HostBinding('[class.fb-btn-default]')
  get default() {
    return this.atType === 'default';
  }

  @HostBinding('[class.fb-btn-danger]')
  get danger() {
    return this.atType === 'danger';
  }
}
