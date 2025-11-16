import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LokasiPerumahanComponent } from './lokasi-perumahan';

describe('LokasiPerumahanComponent', () => {
  let component: LokasiPerumahanComponent;
  let fixture: ComponentFixture<LokasiPerumahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LokasiPerumahanComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LokasiPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
