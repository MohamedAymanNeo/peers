import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "../layout/module/layout.module";
import { SpinnerComponent } from "../layout/controls/extra/spinner/spinner.component";
import { ScrolltopComponent } from "../layout/controls/extra/scrolltop/scrolltop.component";




@NgModule({
    declarations: [
        SpinnerComponent,
        ScrolltopComponent

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
        
        
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        HttpClientModule,
        RouterModule,
        LayoutModule,
        SpinnerComponent,
        ScrolltopComponent

    ],providers:[]
})

export class SharedModule { }
