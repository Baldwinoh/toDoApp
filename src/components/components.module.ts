import { NgModule } from '@angular/core';
import { DoingListComponent } from './doing-list/doing-list';
import { IonicModule } from 'ionic-angular';
import { CompletedComponent } from './completed/completed';
@NgModule({
	declarations: [DoingListComponent,
    CompletedComponent,
    CompletedComponent],
	imports: [IonicModule],
exports: [DoingListComponent,
    CompletedComponent,
    CompletedComponent]
})
export class ComponentsModule {}
