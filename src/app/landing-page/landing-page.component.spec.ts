import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingPageComponent } from './landing-page.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { Router } from '@angular/router';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let mockRouter: jasmine.SpyObj<any>;

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LandingPageComponent, ButtonComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    });
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/issues" when "navigateToIssues" is called', () => {

    component.navigateToIssues();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/issues']);
  });

  it('should render a button with "Click me" text', () => {
    const buttonElement = fixture.debugElement.query(By.css('app-button'));
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.textContent.trim()).toBe('Click me');
  });
});
