'use client';

import { LanguageProvider } from '@/lib/i18n';
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <LanguageProvider>
        {children}
        <Toaster />
      </LanguageProvider>
  );
}
