// Project: useScrollY
export function ScrollY(y: number, behavior: ScrollBehavior = 'smooth'): void {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: y, behavior });
  }
}
