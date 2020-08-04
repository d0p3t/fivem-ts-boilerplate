onNet('helloserver', () => {
  const _source = (global as any).source;

  console.log(`Hello from ${_source}`);

  emitNet('helloclient', _source, 'i got your message!');
});
