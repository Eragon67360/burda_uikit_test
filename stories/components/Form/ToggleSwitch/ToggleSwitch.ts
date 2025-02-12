import './toggleSwitch.css'

export type ToggleSwitchArgs = {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
};

export const createToggleSwitch = ({
    label,
    checked = false,
    disabled = false,
    id = 'toggle-switch',
}: ToggleSwitchArgs) => {
    const wrapper = document.createElement('label');
    wrapper.className = `inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`;

    const html = `
    <input type="checkbox" 
           class="sr-only peer" 
           id="${id}"
           ${checked ? 'checked' : ''}
           ${disabled ? 'disabled' : ''}
    >
    <div class="relative peer-disabled:cursor-not-allowed after:peer-disabled:cursor-not-allowed border border-neutral-400 
                peer-hover:border-secondary-dark transition-all duration-300 
                w-11 h-6
                bg-base-white rounded-full peer
                peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]
                peer-checked:after:border-none after:content-[''] after:absolute
                after:top-[2px] after:start-[2px]
                after:bg-secondary-interaction
                peer-hover:after:bg-secondary-dark
                peer-checked:peer-hover:after:bg-base-white
                after:border-none after:rounded-full after:size-4.5 after:transition-all after:duration-300 after:ease-in-out
                peer-checked:bg-secondary-interaction peer-checked:border-secondary-interaction
                peer-checked:after:bg-base-white peer-checked:peer-hover:bg-secondary-light
                peer-disabled:border-neutral-200
                peer-disabled:after:bg-neutral-300
                peer-checked:peer-disabled:border-neutral-200
                peer-checked:peer-disabled:bg-neutral-200
                peer-checked:peer-disabled:after:bg-base-white
                ${disabled ? '' : 'peer-hover:bg-base-white peer-checked:peer-hover:bg-primary-700'
        }">
    </div>
    ${label
            ? `<span class="ms-3 text-sm font-medium text-gray-900 ${disabled ? 'text-gray-500 cursor-not-allowed' : ''
            }">${label}</span>`
            : ''
        }
  `;

    wrapper.innerHTML = html;
    return wrapper;
};
