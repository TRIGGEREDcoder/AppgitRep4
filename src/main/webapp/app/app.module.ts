import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GitApplicationSharedModule } from 'app/shared/shared.module';
import { GitApplicationCoreModule } from 'app/core/core.module';
import { GitApplicationAppRoutingModule } from './app-routing.module';
import { GitApplicationHomeModule } from './home/home.module';
import { GitApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GitApplicationSharedModule,
    GitApplicationCoreModule,
    GitApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GitApplicationEntityModule,
    GitApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class GitApplicationAppModule {}
