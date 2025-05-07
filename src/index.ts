// 111111111111
// function formatString(input: string, toUpper: boolean = true): string {
//     return toUpper ? input.toUpperCase() : input.toLowerCase();
//   }

//   console.log(formatString('jahid',true));

//   formatString("Hello");          // Output: "HELLO"
//   formatString("Hello", true);   // Output: "HELLO"
//   formatString("Hello", false);  // Output: "hello"

// 22222222222
// function filterByRating(
//     items: { title: string; rating: number }[]
//   ): { title: string; rating: number }[] {
//     return items.filter(item => item.rating >= 4);
//   }
  

//   const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ];
  
//   console.log(filterByRating(books));
//   // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
//   [ { title: 'Book A', rating: 4.5 }, { title: 'Book C', rating: 5 } ]

// 3333333333333
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     console.log(arrays.flat());
//     return arrays.flat();
//   }
//   concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

// 44444444444444

// class Vehicle {
//     private make: string;
//     private year: number;
  
//     constructor(make: string, year: number) {
//       this.make = make;
//       this.year = year;
//     }
  
//     public getInfo(): string {
//       return `Make: ${this.make}, Year: ${this.year}`;
//     }
//   }
  
//   class Car extends Vehicle {
//     private model: string;
  
//     constructor(make: string, year: number, model: string) {
//       super(make, year); // Call the constructor of Vehicle class
//       this.model = model;
//     }
  
//     public getModel(): string {
//       return `Model: ${this.model}`;
//     }
//   }
  
  
//   const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());;   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());;  // Output: "Model: Corolla"


// 5555555555555555
// function processValue(value: string | number): number {
//     if (typeof value === "string") {
//       return value.length;
//     } else {
//       return value * 2;
//     }
//   }
//   console.log(processValue("hello"));; // Output: 5
// console.log(processValue(10));;      // Output: 20

// 66666666666

// interface Product {
//     name: string;
//     price: number;
//   }
  
//   function getMostExpensiveProduct(products: Product[]): Product | null {
//     if (products.length === 0) return null;
  
//     let mostExpensive = products[0];
  
//     for (const product of products) {
//       if (product.price > mostExpensive.price) {
//         mostExpensive = product;
//       }
//     }
  
//     return mostExpensive;
//   }
//   const products = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 }
//   ];
  
//   console.log(getMostExpensiveProduct(products));;  
//   // Output: { name: "Bag", price: 50 }

// 77777777777777

// enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
//   }
  
//   function getDayType(day: Day): string {
//     if (day === Day.Saturday || day === Day.Sunday) {
//       return "Weekend";
//     } else {
//       return "Weekday";
//     }
//   }
//   console.log(getDayType(Day.Monday));   // Output: "Weekday"
// console.log(getDayType(Day.Sunday));   // Output: "Weekend"

// 888888888888888
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); // wait for 1 second
    });
  }
  squareAsync(4).then(console.log);        // Output after 1s: 16
  squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed