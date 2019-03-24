import { NgModule } from "@angular/core";
import { 
    MatBadgeModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule
} from "@angular/material";



@NgModule({
    imports:[
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatOptionModule,
        MatSelectModule
    ],
    exports:[
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatOptionModule,
        MatSelectModule
    ]
})

export class MaterialModule {}