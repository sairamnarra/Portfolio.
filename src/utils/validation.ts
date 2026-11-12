import type { ContactFormData, FormErrors } from '../types/index.ts';

export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return 'Name is required';
  }
  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
    return 'Name can only contain letters, spaces, and hyphens';
  }
  return null;
}

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Email address is required';
  }
  // Standard RFC-compliant practical regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address (e.g. name@domain.com)';
  }
  return null;
}

export function validateSubject(subject: string): string | null {
  const trimmed = subject.trim();
  if (!trimmed) {
    return 'Subject or project topic is required';
  }
  if (trimmed.length < 3) {
    return 'Subject must be at least 3 characters';
  }
  return null;
}

export function validateMessage(message: string): string | null {
  const trimmed = message.trim();
  if (!trimmed) {
    return 'Message cannot be empty';
  }
  if (trimmed.length < 10) {
    return 'Message must be at least 10 characters long';
  }
  return null;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const subjectError = validateSubject(data.subject);
  if (subjectError) errors.subject = subjectError;

  const messageError = validateMessage(data.message);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
