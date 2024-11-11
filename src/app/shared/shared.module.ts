import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "../layout/module/layout.module";
import { SpinnerComponent } from "../layout/controls/extra/spinner/spinner.component";
import { ScrolltopComponent } from "../layout/controls/extra/scrolltop/scrolltop.component";
import { SvgInlineDirective } from "./directives/svg-inline.directive";




@NgModule({
    declarations: [
        SpinnerComponent,
        // ScrolltopComponent,
        // SvgInlineDirective

    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        TranslateModule,
        ReactiveFormsModule,
        LayoutModule,
        // SvgInlineDirective
        // ScrolltopComponent
        
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        HttpClientModule,
        RouterModule,
        LayoutModule,
        SpinnerComponent,
        

    ],providers:[]
})

export class SharedModule { }
