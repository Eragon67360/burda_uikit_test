# Component Creation Script

A Python utility script to automate the creation of Storybook component files and directory structure.

## Overview

This script automates the creation of new component files following our project's structure conventions. It creates the necessary directories and generates three files with boilerplate code:

- Component TS file
- Storybook Stories TS file
- Component CSS file

## Usage

```bash
python create_component.py ComponentPath
```

or (if running in WSL)

```bash
python3 create_component.py ComponentPath
```

### Example:

```bash
python create_component.py Button/ButtonCTA
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

- Empty file for component-specific styles
- Automatically named in camelCase

### 2. Component File (`ButtonCTA.js`)

```javascript
import "./buttonCTA.css";

export const createButtonCTA = ({}) => {};
```

### 3. Stories File (`ButtonCTA.stories.ts`)

```typescript
import type { Meta, StoryObj } from "@storybook/html";
import { createButtonCTA } from "./ButtonCTA";

type ButtonCTAArgs = {};

const meta: Meta<ButtonCTAArgs> = {
  title: "Components/Button/ButtonCTA",
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<ButtonCTAArgs>;

export const ButtonCTA1: Story = {
  args: {},
};
```

## Important Notes

1. **Naming Conventions**:

   - Use PascalCase for component names (e.g., `ButtonCTA`)
   - The script will automatically convert the CSS filename to camelCase
   - Keep directory names consistent with component names

2. **Path Structure**:

   - Use forward slashes (`/`) to separate directories
   - The last part of the path will be used as the component name
   - Example: `Category/Subcategory/ComponentName`

3. **Existing Files**:

   - The script will not overwrite existing files
   - If a directory already exists, the script will attempt to create files inside it

4. **Requirements**:
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
4. Back up any existing files before running the script in their location
