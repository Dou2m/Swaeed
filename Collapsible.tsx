
import React, { useRef, useEffect } from 'react';

interface CollapsibleProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({ isOpen, children, className, id, 'aria-labelledby': ariaLabelledby }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = contentRef.current;
    if (node) {
      if (isOpen) {
        node.style.maxHeight = `${node.scrollHeight}px`;
      } else {
        node.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      id={id}
      role="region"
      aria-labelledby={ariaLabelledby}
      className={`overflow-hidden transition-[max-height] ease-[cubic-bezier(.2,.9,.2,1)] duration-300 ${className || ''}`}
      style={{ maxHeight: '0px' }}
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  );
};

export default React.memo(Collapsible);