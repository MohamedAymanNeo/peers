import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "../layout/module/layout.module";
import { SpinnerComponent } from "../layout/controls/extra/spinner/spinner.component";




@NgModule({
    declarations: [
        SpinnerComponent,


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
        

    ],providers:[]
})

export class SharedModule { }
