import { mockProducts } from '../src/lib/mock-data';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Generate SQL seed file for production D1 database
 * This creates a SQL file that can be executed via wrangler
 */

function generateSeedSQL() {
    const sqlStatements: string[] = [];

    // Clear existing data
    sqlStatements.push('-- Clear existing products');
    sqlStatements.push('DELETE FROM products;');
    sqlStatements.push('');

    // Insert products
    sqlStatements.push('-- Insert products');

    mockProducts.forEach((product) => {
        const attributes = JSON.stringify({
            brand: product.brand,
            originalPrice: product.originalPrice,
            isNew: product.isNew,
            isSale: product.isSale,
            discount: product.discount,
        }).replace(/'/g, "''"); // Escape single quotes

        const images = JSON.stringify([product.image]).replace(/'/g, "''");

        const sql = `INSERT INTO products (name, slug, price, category, attributes, images, in_stock) 
VALUES ('${product.name.replace(/'/g, "''")}', '${product.slug}', ${product.price}, '${product.category}', '${attributes}', '${images}', 1);`;

        sqlStatements.push(sql);
    });

    return sqlStatements.join('\n');
}

// Generate SQL file
const sql = generateSeedSQL();
const outputPath = path.join(__dirname, 'seed.sql');

fs.writeFileSync(outputPath, sql, 'utf-8');

console.log('✅ SQL seed file generated:', outputPath);
console.log(`📊 Total products: ${mockProducts.length}`);
console.log('');
console.log('To seed production database, run:');
console.log('  wrangler d1 execute kinh-mat-db --remote --file=scripts/seed.sql');
console.log('');
console.log('To seed local database, run:');
console.log('  wrangler d1 execute kinh-mat-db --local --file=scripts/seed.sql');
