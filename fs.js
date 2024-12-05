const fs = require('fs');
const path = require('path');

// Helper function to create a directory if it doesn't exist
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper function to create a file with optional content
function createFile(filePath, content = '') {
  fs.writeFileSync(filePath, content, { flag: 'w' });
}

// Base directory structure
const baseDir = path.join(__dirname, 'src');
const structure = {
  modules: {
    auth: ['auth.controller.ts', 'auth.service.ts', 'dto/', 'auth.module.ts'],
    tasks: ['tasks.controller.ts', 'tasks.service.ts', 'dto/', 'tasks.module.ts'],
    categories: [
      'categories.controller.ts',
      'categories.service.ts',
      'dto/',
      'categories.module.ts',
    ],
    users: ['users.controller.ts', 'users.service.ts', 'dto/', 'users.module.ts'],
  },
  shared: [], // For shared utilities or connections
  files: ['main.ts', 'app.module.ts'], // Top-level files
};

// Create base directories and files
function generateStructure() {
  // Create base src/ directory
  createDir(baseDir);

  // Create modules/
  const modulesDir = path.join(baseDir, 'modules');
  createDir(modulesDir);

  // Create each module directory and its contents
  Object.entries(structure.modules).forEach(([moduleName, items]) => {
    const moduleDir = path.join(modulesDir, moduleName);
    createDir(moduleDir);

    items.forEach((item) => {
      const itemPath = path.join(moduleDir, item);
      if (item.endsWith('/')) {
        // Create subdirectory
        createDir(itemPath);
      } else {
        // Create file
        createFile(itemPath, `// ${item} content`);
      }
    });
  });

  // Create shared/ directory
  const sharedDir = path.join(baseDir, 'shared');
  createDir(sharedDir);

  // Create top-level files
  structure.files.forEach((file) => {
    const filePath = path.join(baseDir, file);
    createFile(filePath, `// ${file} content`);
  });

  console.log('Folder structure created successfully!');
}

// Run the function
generateStructure();
