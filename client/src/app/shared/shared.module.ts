import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from '@shared/components/confirmation-dialog/confirmation-dialog.component';
import { FormErrorMessageComponent } from '@shared/components/form-error-message/form-error-message.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { SidebarComponent } from '@shared/components/layout/sidebar/sidebar.component';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FlexLayoutModule, RouterModule, MaterialModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    FormErrorMessageComponent,
    LayoutComponent,
  ],
  declarations: [FormErrorMessageComponent, ConfirmationDialogComponent, LayoutComponent, SidebarComponent],
})
export class SharedModule {}
