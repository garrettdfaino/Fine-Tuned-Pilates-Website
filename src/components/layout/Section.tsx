import { cn } from '@/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  tone?: 'paper' | 'white' | 'ink';
  children: ReactNode;
}

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  paper: 'bg-background text-foreground',
  white: 'bg-secondary text-foreground',
  ink: 'bg-ink text-ink-foreground',
};

export function Section({ id, tone = 'paper', className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 md:py-32 lg:py-44', toneClasses[tone], className)} {...props}>
      {children}
    </section>
  );
}

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-14', className)} {...props}>
      {children}
    </div>
  );
}

export function Eyebrow({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <p className={cn('font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function Index({ n, className }: { n: number; className?: string }) {
  return (
    <span className={cn('font-mono text-[0.6875rem] font-medium tabular-nums tracking-[0.1em] text-muted-foreground', className)}>
      {String(n).padStart(2, '0')}
    </span>
  );
}
