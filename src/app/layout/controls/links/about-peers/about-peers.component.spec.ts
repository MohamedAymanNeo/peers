import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPeersComponent } from './about-peers.component';

describe('AboutPeersComponent', () => {
  let component: AboutPeersComponent;
  let fixture: ComponentFixture<AboutPeersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPeersComponent]
    });
    fixture = TestBed.createComponent(AboutPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
