import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ContentDevHeroSectionComponent } from './components/content-dev-hero-section/content-dev-hero-section.component';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

@NgModule({
  imports: [CommonModule, ContentDevelopmentPageRoutingModule,AppHeaderModule],
  declarations: [
    ContentDevelopmentPageComponent,
    ContentDevHeroSectionComponent,
  ],
  exports: [ContentDevelopmentPageComponent],
})
export class ContentDevelopmentModule {}
