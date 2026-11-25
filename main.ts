const LINE = "The kettle knows exactly when you look away. That is its whole job and it never misses.";

type Options = {
  shout: boolean;
  help: boolean;
};

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function parseArgs(): Options {
  return {
    shout: hasFlag("--shout"),
    help: hasFlag("--help"),
  };
}

function printUsage(): void {
  process.stderr.write("Usage: node main.ts [--shout] [--help]\n");
}

function main(): void {
  const options = parseArgs();

  if (options.help) {
    printUsage();
    return;
  }

  console.log(renderLine(options.shout));
}

main();
