export default async function Page() {
  const res = await fetch('https://api.ipify.org');
  const ip = await res.text();
  const encoded = btoa(ip.trim());

  return <>{encoded}</>;
}
