import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/page/main/main.component';
import { StatsPreviewCardComponent } from './components/organisms/stats-preview-card/stats-preview-card.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { CardContentComponent } from './components/molecules/card-content/card-content.component';
import { BigTextComponent } from './components/atoms/big-text/big-text.component';
import { CardStatsComponent } from './components/molecules/card-stats/card-stats.component';
import { CardStatComponent } from './components/atoms/card-stat/card-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StatsPreviewCardComponent,
    ImageComponent,
    CardContentComponent,
    BigTextComponent,
    CardStatsComponent,
    CardStatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
