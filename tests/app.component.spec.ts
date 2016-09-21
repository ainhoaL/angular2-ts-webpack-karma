var chai = require('chai');
var expect = chai.expect;

import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

describe('App', () => {
	let fixture;
	let el;
	beforeEach(() => {
		TestBed.configureTestingModule({ declarations: [AppComponent]});
		fixture = TestBed.createComponent(AppComponent);
	});
	it('should work', () => {  
		expect(fixture.componentInstance instanceof AppComponent).to.equal(true, 'should create AppComponent');
	});
	it('has the right header', () => {
		el = fixture.debugElement.nativeElement;
		expect(el.textContent).to.equal('Hello World!');
	});
});
