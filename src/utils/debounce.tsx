// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<F extends (...args: any[]) => void>(
  fn: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timeoutID: NodeJS.Timeout | null = null

  return function (...args: Parameters<F>) {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }

    timeoutID = setTimeout(() => fn(...args), delay)
  }
}
