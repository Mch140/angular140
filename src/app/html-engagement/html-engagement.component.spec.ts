import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEngagementComponent } from './html-engagement.component';

describe('HtmlEngagementComponent', () => {
  let component: HtmlEngagementComponent;
  let fixture: ComponentFixture<HtmlEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlEngagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
