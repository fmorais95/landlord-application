import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LandLordSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [LandLordSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [LandLordSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandLordSharedModule {
  static forRoot() {
    return {
      ngModule: LandLordSharedModule
    };
  }
}
