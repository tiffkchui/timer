const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (!isNaN(args[i]) && args[i] > 0) {
    setTimeout(() => {
      console.log('\u0007');
    }, args[i] * 1000
    );
  }
}
