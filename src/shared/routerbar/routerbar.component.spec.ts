import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterbarComponent } from './routerbar.component';

describe('RouterbarComponent', () => {
  let component: RouterbarComponent;
  let fixture: ComponentFixture<RouterbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
