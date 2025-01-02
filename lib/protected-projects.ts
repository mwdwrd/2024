export const PROTECTED_PROJECTS = [
  "bloomberg"
] as string[];

export function getProjectPassword(slug: string): string | null {
  if (!PROTECTED_PROJECTS.includes(slug)) {
    return null;
  }
  
  const envKey = `PROJECT_PASSWORD_${slug.replace(/-/g, '_').toUpperCase()}`;
  return process.env[envKey] || null;
} 