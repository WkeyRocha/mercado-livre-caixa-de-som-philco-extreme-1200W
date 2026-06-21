async function test() {
  const url = 'https://lovable.app/__l5e/assets-v1/478db8bd-831c-4ad0-a818-dbb6e524bed2/philco-1.png';
  try {
    const res = await fetch(url);
    console.log('Status:', res.status);
    console.log('Content-Type:', res.headers.get('content-type'));
    const text = await res.text();
    console.log('Content length:', text.length);
    console.log('Sample body:', text.slice(0, 100));
  } catch (err) {
    console.error('Error:', err);
  }
}
test();
