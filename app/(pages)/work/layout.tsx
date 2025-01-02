"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PROTECTED_PROJECTS } from "@/lib/protected-projects";
import { validateProjectPassword } from "@/lib/actions";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.split('/')[2];

  const needsAuth = slug && PROTECTED_PROJECTS.includes(slug) && !isAuthorized;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await validateProjectPassword(slug, password);
      if (result.success) {
        setIsAuthorized(true);
      } else {
        setError(result.error || 'An error occurred');
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  if (!needsAuth) return children;

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <Card className="w-full max-w-md border-none shadow-none">
        <CardHeader>
          <CardTitle>Protected Project</CardTitle>
          <CardDescription>
            Please enter the password to view this project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            autoComplete="off"
            data-lpignore="true"
            data-form-type="other"
            noValidate
          >
            <div>
              <input
                type="password"
                name={`pwd_${Math.random().toString(36).slice(2)}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full rounded-md border px-3 py-2 sm:text-sm"
                placeholder="Enter password"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                data-lpignore="true"
                data-form-type="other"
                aria-hidden="true"
                tabIndex={-1}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div className="flex gap-3">
              <button 
                type="button" 
                onClick={() => router.push('/work')}
                className="flex-1 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex-1 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Access Project
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 