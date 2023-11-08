function order_sandwich(items: string[]): void {
    console.log("Sandwich Order Summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items: " + items.join(", "));
    console.log("Enjoy your sandwich!");
    console.log("----------------------");
  }
  order_sandwich(["Cheese’, ‘Lettuce’, ‘Tomato"]);
  order_sandwich(["Turkey’, ‘Bacon’, ‘Avocado’, ‘Mayonnaise"]);
  order_sandwich(["Ham", "Swiss Cheese"]);
  
  