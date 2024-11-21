(async () => {
  const optionalRequirePackages = [
    'class-transformer',
    'class-validator',
    '@nestjs/microservices',
    '@nestjs/websockets',
  ];

  const result = await Bun.build({
    entrypoints: ['./src/main.ts'],
    outdir: './dist',
    target: 'bun',
    minify: {
      syntax: true,
      whitespace: true,
    },
    external: optionalRequirePackages.filter((pkg) => {
      try {
        require(pkg);
        return false;
      } catch (_) {
        return true;
      }
    }),
  });

  if (!result.success) {
    console.log(result.logs[0]);
    process.exit(1);
  }

  console.log('Built successfully!');
})();
