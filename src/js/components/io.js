import { listRef } from '../references/refs';

export default function infinityLoad(render) {
  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        render();
        observer.unobserve(listRef.lastElementChild);
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, {
    rootMargin: '50px',
  });

  observer.observe(listRef.lastElementChild);
}
