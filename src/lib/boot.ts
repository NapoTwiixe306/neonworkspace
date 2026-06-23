// Constante partagée entre le serveur (lecture du cookie dans le layout) et le
// client (écriture du cookie dans BootGate). Module neutre (ni "use client"
// ni "use server") pour être importable des deux côtés sans surprise.
export const BOOT_COOKIE = "neon_booted";
