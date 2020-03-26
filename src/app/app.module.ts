import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";

import { from } from "rxjs";
import { ServersComponent } from './servers/servers.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PassingANDUsingDataDemoComponent } from './passing-andusing-data-demo/passing-andusing-data-demo.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { BindingsSummeryComponent } from './bindings-summery/bindings-summery.component';
import { NgIFDirectiveTestComponent } from './ng-if-directive-test/ng-if-directive-test.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, StringInterpolationComponent, PropertyBindingDemoComponent, EventBindingComponent, PassingANDUsingDataDemoComponent, TwoWayDataBindingComponent, BindingsSummeryComponent, NgIFDirectiveTestComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
