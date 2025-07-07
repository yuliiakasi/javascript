function copier(arg) {
  if (arg) {
    let functions = [];
    for (const key in arg) {
      if (typeof arg[key] === 'function') {
        const functionCopy = arg[key].bind({});
        functions.push(functionCopy);
      }
    }
    console.log(functions);
    const c = JSON.stringify(arg);
    const parse = JSON.parse(c);
    return parse
    }
    throw new Error('Could not find a function');
  }

