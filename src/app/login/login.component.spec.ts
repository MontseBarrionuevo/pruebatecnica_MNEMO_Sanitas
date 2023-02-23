import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Layout HTML related tests
  it('should have a div element with class container-login', () => {
    const element = fixture.debugElement.query(By.css('div.container-login'));
    expect(element).toBeTruthy();
  });

  // Title HTML related tests
  it('should have a h1 element with class login-title', () => {
    const element = fixture.debugElement.query(By.css('h1.login-title'));
    expect(element).toBeTruthy();
  });

  it('should display Prueba técnica on the login-title element', () => {
    const element = fixture.debugElement.query(By.css('.login-title'));
    expect(element.nativeElement.innerText).toEqual('Prueba técnica');
  });

  // LoginForm HTML related tests
  it('should have a form with class loginForm', () => {
    const element = fixture.debugElement.query(By.css('form.loginForm'));
    expect(element).toBeTruthy();
  });

  it('should call the loginForm method when the loginForm is submitted', () => {
    const element = fixture.debugElement.query(By.css('.loginForm'));
    const fnc = spyOn(component, 'onSubmit');
    element.triggerEventHandler('ngSubmit', null);
    expect(fnc).toHaveBeenCalled();
  });

  it('should have four row elements inside the loginForm', () => {
    const elements = fixture.debugElement.queryAll(By.css('.loginForm div.row'));
    expect(elements.length).toEqual(4);
  });

  // Email HTML related tests
  it('should have a div-form-input element with class --email', () => {
    const element = fixture.debugElement.query(By.css('.div-form-input.--email'));
    expect(element).toBeTruthy();
  });

  it('should have a label with class form-input-label for the email field', () => {
    const element = fixture.debugElement.query(By.css('.--email label.form-input-label'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('for')).toEqual('email');
  });

  it('should have an input element with class form-input for the email field', () => {
    const element = fixture.debugElement.query(By.css('.--email input.form-input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('type')).toEqual('email');
    expect(element.nativeElement.getAttribute('name')).toEqual('email');
  });

  it('should bind the email to its FormControl', () => {
    const element = fixture.debugElement.query(By.css('.--email .form-input'));
    const control = component.loginForm.get('email');
    const dummyValue = '123';
    control.setValue(dummyValue);
    fixture.detectChanges();
    expect(element.nativeElement.value).toEqual(dummyValue);
  });
  
  // Password HTML related tests
  it('should have a div-form-input element with class --password', () => {
    const element = fixture.debugElement.query(By.css('.div-form-input.--password'));
    expect(element).toBeTruthy();
  });

  it('should have a label with class form-input-label for the password field', () => {
    const element = fixture.debugElement.query(By.css('.--password label.form-input-label'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('for')).toEqual('password');
  });

  it('should have an input element with class form-input for the password field', () => {
    const element = fixture.debugElement.query(By.css('.--password input.form-input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('type')).toEqual('password');
    expect(element.nativeElement.getAttribute('name')).toEqual('password');
  });

  it('should bind the password to its FormControl', () => {
    const element = fixture.debugElement.query(By.css('.--password .form-input'));
    const control = component.loginForm.get('password');
    const dummyValue = '123';
    control.setValue(dummyValue);
    fixture.detectChanges();
    expect(element.nativeElement.value).toEqual(dummyValue);
  });

  // Reminder HTML related tests
  it('should have a div-form-reminder element with class --reminder', () => {
    const element = fixture.debugElement.query(By.css('.div-form-reminder.--reminder'));
    expect(element).toBeTruthy();
  });

  it('should have a label with class form-check-label for the reminderLogin field', () => {
    const element = fixture.debugElement.query(By.css('.--reminder label.form-check-label'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('for')).toEqual('reminderLogin');
  });

  it('should have an input element with class form-reminder for the reminder field', () => {
    const element = fixture.debugElement.query(By.css('.--reminder input.form-reminder'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('type')).toEqual('checkbox');
    expect(element.nativeElement.getAttribute('name')).toEqual('reminderLogin');
  });

  it('should bind the reminder to its FormControl when reminder is checked', () => {
    const element = fixture.debugElement.query(By.css('.div-form-reminder .form-reminder'));
    const control = component.loginForm.get('reminderLogin');
    const dummyValue = true;
    control.setValue(dummyValue);
    fixture.detectChanges();
    expect((element.nativeElement as HTMLInputElement).checked).toEqual(dummyValue);
  });

  it('should bind the reminderLogin to its FormControl when reminderLogin is not checked', () => {
    const element = fixture.debugElement.query(By.css('.div-form-reminder .form-reminder'));
    const control = component.loginForm.get('reminderLogin');
    const dummyValue = false;
    control.setValue(dummyValue);
    fixture.detectChanges();
    expect((element.nativeElement as HTMLInputElement).checked).toEqual(dummyValue);
  });

  // Submit button HTML related tests
  it('should have a button with class form-button inside the loginForm', () => {
    const element = fixture.debugElement.query(By.css('.loginForm button.form-button'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.getAttribute('type')).toEqual('submit');
  });

  it('should display Acceder on the submit button', () => {
    const element = fixture.debugElement.query(By.css('.loginForm .form-button'));
    expect(element.nativeElement.innerText).toEqual('Acceder');
  });

  it('should submit the form when the submit button is clicked', () => {
    const buttonElement = fixture.debugElement.query(By.css('.form-button'));
    const fnc = spyOn(component, 'onSubmit');
    (buttonElement.nativeElement as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(fnc).toHaveBeenCalled();
  });

  // Email FormControl related tests
  it('should mark email as invalid when it has no value', () => {
    const control = component.loginForm.get('email');
    control.setValue(null);
    fixture.detectChanges();
    expect(control.invalid).toBeTruthy();
  });

  it('should mark email as valid when it has value', () => {
    const control = component.loginForm.get('email');
    control.setValue('test@gmail.com');
    fixture.detectChanges();
    expect(control.valid).toBeTruthy();
  });

  // Password FormControl related tests
  it('should mark password as invalid when it has no value', () => {
    const control = component.loginForm.get('password');
    control.setValue(null);
    fixture.detectChanges();
    expect(control.invalid).toBeTruthy();
  });

  it('should mark password as valid when it has value', () => {
    const control = component.loginForm.get('password');
    control.setValue('12345');
    fixture.detectChanges();
    expect(control.valid).toBeTruthy();
  });

  // Reminder FormControl related tests
  it('should set the default value of reminderLogin to false', () => {
    const control = component.loginForm.get('reminderLogin');
    expect(control.value).toBeFalsy();
  });
  
  // isFormValid realted tests
  it('should return true when isFormValid is called and the loginForm is indeed valid', () => {
    const dummyData = {
      email: 'test@gmail.com',
      password: '12345',
      reminderLogin: false      
    };
    component.loginForm.patchValue(dummyData);
    fixture.detectChanges();
    expect(component.isFormValid()).toBeTruthy();
  });

  it('should return false when isFormValid is called and the loginForm is not valid', () => {
    const dummyData = {
      email: 'test@gmail.com',
      password: 'test',
      reminderLogin: false      
    };
    component.loginForm.patchValue(dummyData);
    fixture.detectChanges();
    expect(component.isFormValid()).toBeFalsy();
  });

  // onSubmit related tests
  it('should display console error when onSubmit is called but isFormValid returns false', () => {
    spyOn(component, 'isFormValid').and.returnValue(false);
    const fnc = spyOn(console, 'error');
    component.onSubmit();
    expect(fnc).toHaveBeenCalledWith('Hay errores en el formulario');
  });

  it('should not display console log when onSubmit is called but isFormValid returns true', () => {
    const dummyData = {
      email: 'test@gmail.com',
      password: 'test',
      reminderlogin: false
    };
    component.loginForm.patchValue(dummyData);
    fixture.detectChanges();
    spyOn(component, 'isFormValid').and.returnValue(true);
    spyOn(console, 'log');
    const fnc = spyOn(console, 'error');
    component.onSubmit();
    expect(fnc).not.toHaveBeenCalled();
  });
});
