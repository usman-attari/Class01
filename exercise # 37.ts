function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
  }
  
  make_shirt(); // Large shirt with default message
  make_shirt("Medium"); // Medium shirt with default message
  make_shirt("Small", "Hello, PIAIC!"); // Custom size and message
  
  