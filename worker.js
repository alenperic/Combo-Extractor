// worker.js
self.addEventListener('message', function(e) {
  const { dbText, domain, showPasswords } = e.data;
  const lines = dbText.split('\n');
  let result = lines.filter(line => line.includes(domain))
                     .map(line => showPasswords ? line : line.split(':')[0])
                     .join('\n');

  self.postMessage(result);
});
