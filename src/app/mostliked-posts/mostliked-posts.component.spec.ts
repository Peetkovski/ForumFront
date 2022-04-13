import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostlikedPostsComponent } from './mostliked-posts.component';

describe('MostlikedPostsComponent', () => {
  let component: MostlikedPostsComponent;
  let fixture: ComponentFixture<MostlikedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostlikedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostlikedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
