treba toto pridat do @inilne sekcie

```css
@theme inline {
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--reka-accordion-content-height);
    }
  }
  @keyframes accordion-up {
    from {
      height: var(--reka-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}
```
