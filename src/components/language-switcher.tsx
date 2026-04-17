'use client';

import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/50 p-0.5">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          'h-auto rounded-full px-3 py-1 text-xs',
          language === 'en'
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'hover:bg-accent/50'
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('th')}
        className={cn(
          'h-auto rounded-full px-3 py-1 text-xs',
          language === 'th'
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'hover:bg-accent/50'
        )}
      >
        TH
      </Button>
    </div>
  );
}
