'use server'

import { PROTECTED_PROJECTS, getProjectPassword } from '@/lib/protected-projects'

export async function validateProjectPassword(slug: string, password: string) {
  if (!PROTECTED_PROJECTS.includes(slug)) {
    return { success: false, error: 'Project not found' };
  }

  const correctPassword = getProjectPassword(slug);
  if (!correctPassword) {
    console.error(`No password configured for protected project: ${slug}`);
    return { success: false, error: 'Configuration error' };
  }

  return { 
    success: password === correctPassword,
    error: password === correctPassword ? null : 'Incorrect password'
  };
} 