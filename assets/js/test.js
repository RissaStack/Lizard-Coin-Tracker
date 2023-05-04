function wrapperFunction(arg1, arg2, arg3) {
    const result = createTableRows(arg1, arg2);
    return result;
  }
  
  function createTableRows(arg1, arg2) {
    return arg1 + arg2;
  }
  
  console.log(wrapperFunction(1, 2));