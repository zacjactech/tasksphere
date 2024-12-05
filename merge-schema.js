const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, 'prisma/models');
const outputFile = path.join(__dirname, 'prisma/schema.prisma');

// Base schema
let schemaContent = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
`;

// Append all model files
fs.readdirSync(schemaDir).forEach(file => {
  if (file.endsWith('.prisma')) {
    const modelContent = fs.readFileSync(path.join(schemaDir, file), 'utf-8');
    schemaContent += `\n${modelContent}`;
  }
});

// Write the merged schema
fs.writeFileSync(outputFile, schemaContent);
console.log('Schema merged successfully!');
