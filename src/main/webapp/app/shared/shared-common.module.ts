import { NgModule } from '@angular/core';

import { LandLordSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [LandLordSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [LandLordSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LandLordSharedCommonModule {}
