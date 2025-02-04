import os
import sys
import re

def update_mdx_file(component_path):
    mdx_path = os.path.join('stories', 'docs', 'Introduction.mdx')
    parts = component_path.split('/')
    
    # Read existing content
    with open(mdx_path, 'r') as f:
        content = f.read()
    
    # Find the "Available Components" section
    components_section = "## Available Components"
    if components_section not in content:
        print("Error: Could not find '## Available Components' section in MDX file")
        return

    # Split content at "Available Components" section
    pre_section, post_section = content.split(components_section)
    
    # Process the post-section content
    lines = post_section.strip().split('\n')
    new_lines = []
    current_section = None
    current_subsection = None
    component_added = False
    
    # Create the new component link
    component_link = f"- [{parts[-1]}](?path=/docs/components-{'-'.join(component_path.lower().split('/'))}--docs)"
    
    # Process existing lines and add new component in the right place
    for line in lines:
        if line.startswith('### '):
            current_section = line[4:].strip()
            current_subsection = None
        elif line.startswith('#### '):
            current_subsection = line[5:].strip()
            
        # Add line to new_lines
        new_lines.append(line)
        
        # Check if we should add our new component here
        if len(parts) > 1:  # Has section/subsection
            if current_section == parts[0] and current_subsection == parts[1]:
                if component_link not in new_lines:
                    new_lines.append(component_link)
                    component_added = True
        elif len(parts) == 1:  # Only has section
            if current_section == parts[0] and not current_subsection:
                if component_link not in new_lines:
                    new_lines.append(component_link)
                    component_added = True

    # If component wasn't added (section/subsection didn't exist)
    if not component_added:
        if len(parts) > 1:
            if not any(line.startswith(f'### {parts[0]}') for line in new_lines):
                new_lines.append('')  # Empty line for spacing
                new_lines.append(f'### {parts[0]}')
            if not any(line.startswith(f'#### {parts[1]}') for line in new_lines):
                new_lines.append('')  # Empty line for spacing
                new_lines.append(f'#### {parts[1]}')
            new_lines.append(component_link)
        else:
            if not any(line.startswith(f'### {parts[0]}') for line in new_lines):
                new_lines.append('')  # Empty line for spacing
                new_lines.append(f'### {parts[0]}')
            new_lines.append(component_link)

    # Combine everything back together
    new_content = pre_section + components_section + '\n\n' + '\n'.join(new_lines)

    # Write back to file
    with open(mdx_path, 'w') as f:
        f.write(new_content)

def create_component_files(component_path):
    # Your existing create_component_files function here...
    parts = component_path.split('/')
    component_name = parts[-1]
    
    base_path = os.path.join('stories', 'components')
    full_path = os.path.join(base_path, *parts[:-1], component_name)
    
    os.makedirs(full_path, exist_ok=True)
    
    css_filename = f"{component_name[0].lower()}{component_name[1:]}.css"
    with open(os.path.join(full_path, css_filename), 'w') as f:
        pass
    
    ts_content = f"""import './{css_filename}'
    
export type {component_name}Args = {{

}};
export const create{component_name} = ({{}}) => {{
  
}}
"""
    with open(os.path.join(full_path, f"{component_name}.ts"), 'w') as f:
        f.write(ts_content)
    
    stories_content = f"""import type {{ Meta, StoryObj }} from '@storybook/html';
import {{ create{component_name}, {component_name}Args }} from './{component_name}';

const meta: Meta<{component_name}Args> = {{
    title: 'Components/{"/".join(parts)}',
    tags:['autodocs'],
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
    if len(sys.argv) != 2:
        print("Usage: python script.py ComponentPath")
        print("Example: python script.py Button/ButtonCTA")
        sys.exit(1)
    
    component_path = sys.argv[1]
    create_component_files(component_path)
    update_mdx_file(component_path)
    print(f"Component files created successfully for {component_path}")
    print("MDX documentation updated")

if __name__ == "__main__":
    main()
