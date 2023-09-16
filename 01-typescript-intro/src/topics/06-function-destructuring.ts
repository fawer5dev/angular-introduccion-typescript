// Define the Product interface for describing products
interface Product {
    description: string;
    price: number;
}

// Create two product objects
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const table: Product = {
    description: 'iPad Air',
    price: 250.0
}

// Define the TaxCaculationOptions interface for calculating tax
interface TaxCaculationOptions {
    tax: number;
    products: Product[];
}

// Define the taxCaculation function for calculating total and tax amount
function taxCaculation(options: TaxCaculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;

    // Calculate the total price of all products
    products.forEach(({ price }) => {
        total += price;
    });

    // Calculate the tax amount
    return [total, total * tax];
}

// Define a shopping cart as an array of products
const shoppingCard = [phone, table];
const tax = 0.15;

// Calculate the total and tax amount using the taxCaculation function
const [total, totalTax] = taxCaculation({
    products: shoppingCard,
    tax: tax,
});

// Output the results
console.log('Total', total);
console.log('Tax', totalTax);

// Export to indicate the end of the code
export {};