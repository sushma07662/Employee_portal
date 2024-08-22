import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a toggleForm method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.toggleForm).toBeDefined();
  });

  it('should toggle showAdminForm property', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.showAdminForm = true;
    app.toggleForm();
    expect(app.showAdminForm).toBeFalse();
    app.toggleForm();
    expect(app.showAdminForm).toBeTrue();
  });

  it('should render the correct header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Admin Sign Up');
    fixture.componentInstance.toggleForm();
    fixture.detectChanges();
    expect(compiled.querySelector('h1')?.textContent).toContain('Employee Sign Up');
  });
});
