export function cn(...inputs) {
  const parts = [];

  const visit = (value) => {
    if (!value) return;
    if (typeof value === 'string' || typeof value === 'number') {
      parts.push(String(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (typeof value === 'object') {
      Object.entries(value).forEach(([key, enabled]) => {
        if (enabled) parts.push(key);
      });
    }
  };

  inputs.forEach(visit);
  return parts.join(' ').trim();
}
