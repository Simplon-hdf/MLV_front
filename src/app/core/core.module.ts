import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { ApiService } from './service/api.service';
import { AuthService } from './service/auth.service';
import { StorageService } from './service/storage.service';
import { InterceptorModule } from './interceptor/interceptor.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, InterceptorModule],
  providers: [
    AuthGuard,
    ApiService,
    AuthService,
    StorageService,
  ],
})
export class CoreModule {}
