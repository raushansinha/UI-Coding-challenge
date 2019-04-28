import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatIconModule, MatSelectModule, MatRadioModule, MatButtonModule, MatTableModule, MatSortModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatToolbarModule, MatPaginatorModule, MatTabsModule, MatCheckboxModule, MatDialog, MatTooltipModule,
    MatExpansionModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatProgressSpinnerModule, MatAutocompleteModule, MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatTabsModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatSelectModule,
        MatRadioModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatCardModule,
        MatTooltipModule,
        MatButtonModule, 
        MatCardModule, 
        MatIconModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatTabsModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatSelectModule,
        MatRadioModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatCardModule,
        MatTooltipModule,
        MatButtonModule, 
        MatCardModule, 
        MatIconModule
    ]
})
export class AppMaterialModule { }