var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var travelDestinations = ["Tokyo”, “Paris”, “New York”, “Bali”, “Rome"];
console.log("Original Order:");
console.log(travelDestinations);
console.log("Alphabetical Order (without modifying the actual list):");
console.log(__spreadArray([], travelDestinations, true).sort());
console.log("Array is still in its Original Order:");
console.log(travelDestinations);
console.log("Reverse Alphabetical Order (without modifying the actual list):");
console.log.apply(console, travelDestinations.sort().reverse());
console.log("Array is still in its Original Order:");
console.log(travelDestinations);
console.log("Reversed Order:");
travelDestinations.reverse();
console.log(travelDestinations);
console.log("Reversed Order (back to Original Order):");
travelDestinations.reverse();
console.log(travelDestinations);
console.log("Sorted in Alphabetical Order:");
travelDestinations.sort();
console.log(travelDestinations);
console.log("Sorted in Reverse Alphabetical Order:");
travelDestinations.sort().reverse();
console.log(travelDestinations);
