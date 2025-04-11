# Component Creation Script

A Python utility script to automate the creation of Storybook component files and directory structure.

## Overview

This script automates the creation of new component files following our project's structure conventions. It creates the necessary directories and generates three files with boilerplate code:

- Component TS file
- Storybook Stories TS file
- Component CSS file

## Usage

```bash
python create_component.py ComponentPath [AtomicType]
```

or (if running in WSL)

```bash
python3 create_component.py ComponentPath [AtomicType]
```

### Examples:

Basic usage:

```bash
python create_component.py Button/ButtonCTA
```

With Atomic Design type:

```bash
python create_component.py Button/ButtonCTA Atom
```

This will create:

```
stories/
└── components/
    └── Button/
        └── ButtonCTA/
            ├── buttonCTA.css
            ├── ButtonCTA.js
            └── ButtonCTA.stories.ts
```

## File Structure Generated

### 1. CSS File (`buttonCTA.css`)

```css
/* Empty file for component-specific styles */
```

### 2. Component File (`ButtonCTA.js`)

```javascript
import "./buttonCTA.css";

export type ButtonCTAArgs = {};

export const createButtonCTA = ({}) => {};
```

### 3. Stories File (`ButtonCTA.stories.ts`)

Without Atomic Type:

```typescript
import type { Meta, StoryObj } from '@storybook/html';
import { createButtonCTA, ButtonCTAArgs } from './ButtonCTA';

const meta: Meta<ButtonCTAArgs> = {
  title: 'Components/Button/ButtonCTA',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
  render: (args) => createButtonCTA(args as any),
};
```

With Atomic Type:

```typescript
import type { Meta, StoryObj } from '@storybook/html';
import { createButtonCTA, ButtonCTAArgs } from './ButtonCTA';

const meta: Meta<ButtonCTAArgs> = {
  title: 'Components (Atoms)/Button/ButtonCTA',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
  render: (args) => createButtonCTA(args as any),
};
```

## Important Notes

1. **Atomic Design Types**:

   - Optional argument: `Atom`, `Molecule`, or `Organism`
   - Affects the component's story title organization
   - If not provided, uses default "Components" category

2. **Naming Conventions**:

   - Use PascalCase for component names (e.g., `ButtonCTA`)
   - The script will automatically convert the CSS filename to camelCase
   - Keep directory names consistent with component names

3. **Path Structure**:

   - Use forward slashes (`/`) to separate directories
   - The last part of the path will be used as the component name
   - Example: `Category/Subcategory/ComponentName`

4. **Existing Files**:

   - The script will not overwrite existing files
   - If a directory already exists, the script will attempt to create files inside it

5. **Requirements**:
   - Python 3.x installed on your system
   - Script must be run from the project root directory
   - The `stories/components` directory structure must exist

## Common Issues

1. **Wrong Working Directory**:

   - Ensure you're running the script from the project root
   - The script assumes `stories/components` exists

2. **Invalid Component Names**:

   - Avoid special characters in component names
   - Stick to PascalCase naming convention
   - Don't use spaces in names

3. **Permission Issues**:
   - Ensure you have write permissions in the target directory

## Best Practices

1. Always verify the generated files after creation
2. Follow the naming conventions strictly
3. Run the script from the project root directory
4. Use atomic design types consistently across related components
5. Back up any existing files before running the script in their location
