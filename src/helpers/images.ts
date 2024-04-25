export function getImageUrl(name: string): string {
  return new URL(`../assets/screenshot/${name}`, import.meta.url).href;
}
