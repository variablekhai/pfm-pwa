import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBarComponent } from './wallet-bar.component';

describe('WalletBarComponent', () => {
  let component: WalletBarComponent;
  let fixture: ComponentFixture<WalletBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
