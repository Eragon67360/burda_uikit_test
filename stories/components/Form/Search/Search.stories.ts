import type { Meta, StoryObj } from '@storybook/html';
import { createSearch, SearchArgs } from './Search';

const meta: Meta<SearchArgs> = {
    title: 'Components (Atoms)/Form/Search',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the search input',
        },
        results: {
            control: 'object',
            description: 'Array of search results',
        },
        emptyText: {
            control: 'text',
            description: 'Text to show when no results are available',
        },
        onSearch: { action: 'searched' },
        isSmall: {
            control: 'boolean',
            description: 'Is search small',
            defaultValue: false
        },
    },
    render: (args) => {
        const wrapper = document.createElement('div');
        wrapper.style.width = '400px';
        wrapper.appendChild(createSearch(args));
        return wrapper;
    }
};

export default meta;
type Story = StoryObj<SearchArgs>;

export const Empty: Story = {
    args: {
        placeholder: 'Search...',
        results: [],
    },
};

export const EmptyCustomText: Story = {
    args: {
        placeholder: 'Search...',
        results: [],
        emptyText: 'No matching results found. Try different keywords.',
    },
};

export const WithSmallSearch: Story = {
    args: {
        placeholder: 'Search...',
        results: [],
        emptyText: 'No matching results found. Try different keywords.',
        isSmall: true
    },
};

// With Results
export const WithResults: Story = {
    args: {
        placeholder: 'Search...',
        results: [
            {
                label: 'Search Result 1',
                href: '#',
                onClick: () => console.log('Clicked result 1')
            },
            {
                label: 'Search Result 2',
                href: '#',
                onClick: () => console.log('Clicked result 2')
            },
            {
                label: 'Search Result 3',
                href: '#',
                onClick: () => console.log('Clicked result 3')
            }
        ],
    },
};

// With Custom Placeholder
export const CustomPlaceholder: Story = {
    args: {
        placeholder: 'Type to search...',
        results: [],
        emptyText: 'Start typing to see results',
    },
};

// Active State (with focus)
export const Active: Story = {
    args: {
        placeholder: 'Search...',
        results: [
            {
                label: 'Active Result 1',
                href: '#',
                onClick: () => console.log('Clicked active result 1')
            },
            {
                label: 'Active Result 2',
                href: '#',
                onClick: () => console.log('Clicked active result 2')
            }
        ],
    },
    parameters: {
        pseudo: { focus: true },
    },
};