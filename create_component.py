import os
import sys

def create_component_files(component_path):
    # Split the path into parts (e.g., "Button/ButtonLink" -> ["Button", "ButtonLink"])
    parts = component_path.split('/')
    component_name = parts[-1]  # Get the last part as component name
    
    # Create the base directory path
    base_path = os.path.join('stories', 'components')
    
    # Create full path including all subdirectories
    full_path = os.path.join(base_path, *parts[:-1], component_name)
    
    # Create all necessary directories
    os.makedirs(full_path, exist_ok=True)
    
    # Create CSS file (lowercase first letter)
    css_filename = f"{component_name[0].lower()}{component_name[1:]}.css"
    with open(os.path.join(full_path, css_filename), 'w') as f:
        pass  # Create empty CSS file
    
    # Create JS file
    ts_content = f"""import './{css_filename}'
export type {component_name}Args = {{

}};
export const create{component_name} = ({{}}) => {{
  
}}
"""
    with open(os.path.join(full_path, f"{component_name}.ts"), 'w') as f:
        f.write(ts_content)
    
    # Create stories file
    stories_content = f"""import type {{ Meta, StoryObj }} from '@storybook/html';
import {{ create{component_name}, {component_name}Args }} from './{component_name}';



const meta: Meta<{component_name}Args> = {{
    title: 'Components/{"/".join(parts)}',
    parameters: {{
        controls: {{ expanded: true }},
    }},
    argTypes: {{

    }}
}};

export default meta;
type Story = StoryObj<{component_name}Args>;

export const {component_name}1: Story = {{
    args: {{
    }}
}};
"""
    with open(os.path.join(full_path, f"{component_name}.stories.ts"), 'w') as f:
        f.write(stories_content)

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py ComponentPath")
        print("Example: python script.py Button/ButtonLink")
        sys.exit(1)
    
    component_path = sys.argv[1]
    create_component_files(component_path)
    print(f"Component files created successfully for {component_path}")

if __name__ == "__main__":
    main()
