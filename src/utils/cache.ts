export function getFromCache<T>(key: string): T | null {
  const cachedValue = localStorage.getItem(key);

  if (cachedValue) {
    const parsedValue = JSON.parse(cachedValue);

    if (parsedValue.expiration < Date.now()) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedValue.value;
  }

  return null;
}

export function storeInCache(
  key: string,
  value: any,
  expirationTimeMillis: number
): void {
  localStorage.setItem(
    key,
    JSON.stringify({
      expiration: expirationTimeMillis + Date.now(),
      value: value,
    })
  );
}
