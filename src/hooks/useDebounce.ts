import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, timeMillis: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), timeMillis);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}
