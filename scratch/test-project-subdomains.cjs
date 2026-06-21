const subdomains = [
  'pixel-perfect-clone',
  'pixel-perfect-clone-fixed',
  'pixel-perfect',
  'philco-extreme'
];

async function test() {
  for (const sub of subdomains) {
    const url = `https://${sub}.lovable.app/`;
    try {
      const res = await fetch(url);
      console.log(`${sub} -> ${res.status}`);
      if (res.status === 200) {
        const text = await res.text();
        console.log(`  Body preview: ${text.slice(0, 100)}`);
      }
    } catch (err) {
      console.log(`${sub} -> Error: ${err.message}`);
    }
  }
}
test();
