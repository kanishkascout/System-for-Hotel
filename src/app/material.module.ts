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
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
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
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
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
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ]   
})

export class MaterialModule {}