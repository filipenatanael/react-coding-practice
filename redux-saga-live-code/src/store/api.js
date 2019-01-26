export default function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Fazer café' },
        { id: 2, text: 'Fazer café 2' },
        { id: 3, text: 'Fazer café 3' },
        { id: 4, text: 'Fazer café 4' },
      ]);
    }, 2000);
  });
}
