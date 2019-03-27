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
    MatSelectModule,
    MatDialogModule
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
        MatSelectModule,
        MatDialogModule
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
        MatSelectModule,
        MatDialogModule
    ]   
})

export class MaterialModule {}