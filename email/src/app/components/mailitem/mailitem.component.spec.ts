import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailitemComponent } from './mailitem.component';

describe('MailitemComponent', () => {
  let component: MailitemComponent;
  let fixture: ComponentFixture<MailitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
