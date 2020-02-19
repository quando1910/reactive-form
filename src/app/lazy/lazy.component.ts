import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { ReactiveFormService } from '@theflames/reactive-form';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {

  constructor(
    private reactiveService: ReactiveFormService
  ) {}


  ngOnInit() {
    this.reactiveService.components$.subscribe(data => {
      console.log(data);
    });
  }
}
