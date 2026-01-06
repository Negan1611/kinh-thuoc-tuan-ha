# Database Seeding Guide

## Prerequisites

1. Make sure you have created the D1 database:
```bash
wrangler d1 create kinh-mat-db
```

2. Run migrations to create tables:
```bash
npm run db:migrate
```

## Seeding the Database

### Local Development

To seed your local D1 database with mock product data:

```bash
npm run seed
```

This will:
- Connect to your local D1 database (`.wrangler/state/v3/d1/...`)
- Clear existing products
- Insert 16 mock products from `src/lib/mock-data.ts`

### Production

For production, you'll need to:

1. First, ensure migrations are applied to production:
```bash
npm run db:migrate:prod
```

2. Then run the seed script against production database:
```bash
# Update scripts/seed.ts to use remote D1
# Or use wrangler d1 execute with SQL file
```

## Troubleshooting

**Error: Cannot find database file**
- Make sure you've run `wrangler dev` or `npm run preview` at least once to create the local D1 database

**Error: Table doesn't exist**
- Run `npm run db:migrate` to create tables first

**Error: Module not found**
- Run `npm install` to ensure all dependencies are installed
