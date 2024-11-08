import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { SharedModule } from "./shared.module";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from "@angular/core";
import { TranslationService } from "./translation/translation.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
function getAppConfig()  {
  return environment;
}


// function getBaseUrl (appConfig:ConfigurationService){
//   let url = appConfig.settings.apiServer.peersUrl
//   return url.slice(0, url.length-1)
// }

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
      isolate: false,
      useDefaultLang: true,
    }),
    SharedModule,

  ],
  providers:[
    TranslationService
  ],
  declarations: [
    
  ],
})
export class CoreModule { }
