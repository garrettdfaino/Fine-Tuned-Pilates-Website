import { cn } from '@/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  tone?: 'light' | 'surface' | 'ink';
  children: ReactNode;
}

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  light: 'bg-background',
  surface: 'bg-secondary',
  ink: 'bg-ink text-ink-foreground',
};

export function Section({ id, tone = 'light', className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 md:py-32 lg:py-40', toneClasses[tone], className)} {...props}>
      {children}
    </section>
  );
}

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-12', className)} {...props}>
      {children}
    </div>
  );
}

export function Eyebrow({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <p className={cn('text-[0.6875rem] font-semibold uppercase tracking-[0.22em]', className)} {...props}>
      {children}
    </p>
  );
}
