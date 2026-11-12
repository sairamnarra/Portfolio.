import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateName,
  validateEmail,
  validateSubject,
  validateMessage,
  validateContactForm,
} from './validation.ts';

test('validateName correctly handles valid and invalid names', () => {
  assert.equal(validateName(''), 'Name is required');
  assert.equal(validateName('   '), 'Name is required');
  assert.equal(validateName('A'), 'Name must be at least 2 characters');
  assert.equal(validateName('John123!'), 'Name can only contain letters, spaces, and hyphens');
  assert.equal(validateName('Narra Sairam'), null);
  assert.equal(validateName('Dr. J. Smith-Connor'), null);
});

test('validateEmail correctly checks format', () => {
  assert.equal(validateEmail(''), 'Email address is required');
  assert.equal(validateEmail('invalid-email'), 'Please enter a valid email address (e.g. name@domain.com)');
  assert.equal(validateEmail('user@'), 'Please enter a valid email address (e.g. name@domain.com)');
  assert.equal(validateEmail('@domain.com'), 'Please enter a valid email address (e.g. name@domain.com)');
  assert.equal(validateEmail('narrasairam13@gmail.com'), null);
  assert.equal(validateEmail('contact.team@company.co.in'), null);
});

test('validateSubject checks minimal length', () => {
  assert.equal(validateSubject(''), 'Subject or project topic is required');
  assert.equal(validateSubject('Hi'), 'Subject must be at least 3 characters');
  assert.equal(validateSubject('Software Engineering Role Inquiry'), null);
});

test('validateMessage requires at least 10 characters', () => {
  assert.equal(validateMessage(''), 'Message cannot be empty');
  assert.equal(validateMessage('Short'), 'Message must be at least 10 characters long');
  assert.equal(validateMessage('Hello, I would like to discuss an opportunity on our engineering team.'), null);
});

test('validateContactForm validates complete form payload', () => {
  const invalid = validateContactForm({
    name: '',
    email: 'bad',
    subject: 'a',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Narra Sairam',
    email: 'narrasairam13@gmail.com',
    subject: 'Collaboration Opportunity',
    message: 'We are impressed by your background in Python, data analysis, and machine learning.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});
