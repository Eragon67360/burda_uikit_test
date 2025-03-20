import os
import sys
import re

def create_component_files(component_path, atomic_type=None):
    valid_atomic_types = ['Atom', 'Molecule', 'Organism', 'Template']
    if atomic_type and atomic_type not in valid_atomic_types:
        print(f"Error: Atomic type must be one of {', '.join(valid_atomic_types)}")
        sys.exit(1)

    parts = component_path.split('/')
    component_name = parts[-1]
    
    base_path = os.path.join('stories', 'components')
    full_path = os.path.join(base_path, *parts[:-1], component_name)
    
    os.makedirs(full_path, exist_ok=True)
    
    # Create CSS file
    css_filename = f"{component_name[0].lower()}{component_name[1:]}.css"
    with open(os.path.join(full_path, css_filename), 'w') as f:
        pass
    
    # Create component file
    ts_content = f"""import './{css_filename}'
    
export type {component_name}Args = {{

}};

export const create{component_name} = ({{}}) => {{
  
}}
"""
    with open(os.path.join(full_path, f"{component_name}.ts"), 'w') as f:
        f.write(ts_content)
    
    # Create stories file
    title_prefix = f"Components ({atomic_type}s)" if atomic_type else "Components"
    stories_content = f"""import type {{ Meta, StoryObj }} from '@storybook/html';
import {{ create{component_name}, {component_name}Args }} from './{component_name}';

const meta: Meta<{component_name}Args> = {{
    title: '{title_prefix}/{"/".join(parts)}',
    tags: ['autodocs'],
    parameters: {{
        controls: {{ expanded: true }},
    }},
    argTypes: {{

    }},
    render: (args) => create{component_name}(args as any)
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
    if len(sys.argv) not in [2, 3]:
        print("Usage: python script.py ComponentPath [AtomicType]")
        print("Example: python script.py Button/ButtonCTA [Atom|Molecule|Organism|Template]")
        sys.exit(1)
    
    component_path = sys.argv[1]
    atomic_type = sys.argv[2] if len(sys.argv) == 3 else None
    
    create_component_files(component_path, atomic_type)
    print(f"Component files created successfully for {component_path}")

if __name__ == "__main__":
    main()
