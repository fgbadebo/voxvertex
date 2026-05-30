import * as React from 'react';
import { motion } from 'motion/react';
import { ChevronDownIcon } from 'lucide-react';

import {
  Disclosure as DisclosurePrimitive,
  DisclosureButton as DisclosureButtonPrimitive,
  DisclosurePanel as DisclosurePanelPrimitive,
  type DisclosureProps as DisclosurePrimitiveProps,
  type DisclosureButtonProps as DisclosureButtonPrimitiveProps,
  type DisclosurePanelProps as DisclosurePanelPrimitiveProps,
} from '@/components/animate-ui/primitives/headless/disclosure';
import { cn } from '@/lib/utils';

type AccordionProps<TTag extends React.ElementType = 'div'> =
  React.ComponentProps<TTag> & {
    children: React.ReactNode;
    as?: TTag;
  };

function Accordion<TTag extends React.ElementType = 'div'>({
  as: Component = 'div',
  ...props
}: AccordionProps<TTag>) {
  return <Component data-slot="accordion" {...props} />;
}

// 🟢 MODIFIED: Added open boolean to the type definition
type AccordionItemProps<TTag extends React.ElementType = 'div'> =
  DisclosurePrimitiveProps<TTag> & { open?: boolean };

// 🟢 MODIFIED: Added the key={String(open)} logic
function AccordionItem<TTag extends React.ElementType = 'div'>({
  className,
  children,
  open, // Destructure open prop
  ...props
}: AccordionItemProps<TTag>) {
  return (
    <DisclosurePrimitive
      // This forces the component to re-mount when 'open' changes,
      // resetting the internal state to match the parent's control.
      key={String(open)}
      defaultOpen={open}
      {...props}
    >
      {(bag) => (
        <div className={cn('border-b', className)}>
          {typeof children === 'function' ? children(bag) : children}
        </div>
      )}
    </DisclosurePrimitive>
  );
}

type AccordionButtonProps = DisclosureButtonPrimitiveProps & {
  showArrow?: boolean;
};

function AccordionButton({
  className,
  children,
  showArrow = true,
  ...props
}: AccordionButtonProps) {
  return (
    <DisclosureButtonPrimitive
      className={cn(
        'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 w-full rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {(bag) => (
        <>
          {typeof children === 'function' ? children(bag) : children}
          {showArrow && (
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
          )}
        </>
      )}
    </DisclosureButtonPrimitive>
  );
}

type AccordionPanelProps<TTag extends React.ElementType = typeof motion.div> =
  DisclosurePanelPrimitiveProps<TTag>;

function AccordionPanel<TTag extends React.ElementType = typeof motion.div>({
  className,
  children,
  ...props
}: AccordionPanelProps<TTag>) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <DisclosurePanelPrimitive<any> {...props}>
      {(bag) => (
        <div className={cn('text-sm pt-0 pb-4', className)}>
          {typeof children === 'function' ? children(bag) : children}
        </div>
      )}
    </DisclosurePanelPrimitive>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionButtonProps,
  type AccordionPanelProps,
};