self.onmessage = function ({ data }) {
  let a = 0;
  for (let i = 0; i < data; i++) a += i;
  postMessage(a);
};
