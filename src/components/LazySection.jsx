import { memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LazySection = memo(({ 
  children, 
  fallback = null, 
  threshold = 0.1, 
  rootMargin = '100px',
  className = '',
  ...props 
}) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <div ref={targetRef} className={className} {...props}>
      {hasIntersected ? children : fallback}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;
