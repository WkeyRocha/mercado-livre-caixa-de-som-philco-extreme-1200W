async function test() {
  const url = 'https://c42e5c33-6c0e-4507-adbf-51adc8b9742c.lovable.app/';
  try {
    const res = await fetch(url);
    console.log('Status:', res.status);
    console.log('Headers:', [...res.headers.entries()]);
    const text = await res.text();
    console.log('Length:', text.length);
    console.log('Body:', text.slice(0, 500));
  } catch (err) {
    console.error('Error:', err);
  }
}
test();
