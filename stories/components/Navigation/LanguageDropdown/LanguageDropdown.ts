import { IconCategory, IconRegistry } from "@/stories/assets/icons";
import { getSizedIcon } from "@/stories/utils/iconUtils";

export type LanguageOption = {
    code: string;
    name: string;
    icon: string; // Icon identifier from IconRegistry
};

export type LanguageDropdownArgs = {
    options: LanguageOption[];
    selectedLanguage?: string;
    label?: string;
    disabled?: boolean;
    isCompressed: boolean;
};

export const createLanguageDropdown = ({
    options,
    selectedLanguage,
    label = 'Sprache',
    disabled = false,
    isCompressed = false,
}: LanguageDropdownArgs) => {

    const currentLanguage = selectedLanguage
        ? options.find(lang => lang.code === selectedLanguage)
        : options[0];

    const wrapper = document.createElement('div');
    wrapper.className = 'relative inline-block w-fit h-full language-dropdown';

    const dropdownTrigger = document.createElement('button');
    dropdownTrigger.className = `
        flex items-center justify-between w-fit bg-transparent h-full
        px-4 pt-2 pb-1 gap-2 text-sm font-medium text-gray-700
        hover:bg-secondary-light
        hover:border-transparent
        active:bg-secondary-interaction
        border-b-[5px] border-transparent 
        transition 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    `.trim();

    dropdownTrigger.type = 'button';
    dropdownTrigger.disabled = disabled;

    const currentFlagIcon = document.createElement('div')
    currentFlagIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.FLAGS][currentLanguage.icon], 18)

    const currentLanguageText = document.createElement('span');
    currentLanguageText.textContent = label;
    currentLanguageText.className = `text-sm font-semibold font-instrument-sans`

    const dropdownIcon = document.createElement('span');
    dropdownIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronDown, 14);
    dropdownIcon.className = 'transition-transform duration-300';

    if (!isCompressed) {
        dropdownTrigger.appendChild(currentLanguageText);
    }
    dropdownTrigger.appendChild(currentFlagIcon);
    dropdownTrigger.appendChild(dropdownIcon);

    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = `
        absolute z-10 mt-2 left-1/2 -translate-x-1/2 py-3 pl-2 pr-4 w-fit 
        bg-base-white shadow-lg rounded-lg 
        hidden 
    `.trim();

    const radioContainer = document.createElement('div');
    radioContainer.className = 'space-y-4 px-2.5 py-3';

    const updateTrigger = (option: LanguageOption) => {
        currentFlagIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.FLAGS][option.icon], 18);
        dropdownContainer.classList.add('hidden');
        dropdownTrigger.classList.add('border-transparent', 'bg-transparent');
        dropdownTrigger.classList.remove('border-secondary-dark', 'bg-base-white');
        dropdownIcon.classList.remove('scale-y-[-1]');
    };

    options.forEach((option) => {
        const radioWrapper = document.createElement('div');
        radioWrapper.className = `
            flex items-center justify-start gap-3 
            cursor-pointer 
            rounded-lg 
            transition group 
            p-2
            ${disabled ? 'opacity-50 pointer-events-none' : ''}
        `;

        const interRadioWrapper = document.createElement('div');
        interRadioWrapper.className = 'relative flex items-center justify-center';

        // Radio input
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'language-select';
        radioInput.value = option.code;
        radioInput.checked = option.code === selectedLanguage;
        radioInput.className = `
            appearance-none 
            size-4 
            transition duration-300 
            text-secondary-interaction 
            shrink-0 
            inset-0 
            rounded-full 
            bg-neutral-100 
            m-auto 
            border 
            border-neutral-450
            checked:bg-base-white
            hover:border-secondary-dark
            checked:border-base-black
            focus-visible:border-2
            focus-visible:border-base-black
            peer
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `;

        const innerContent = document.createElement('div');
        innerContent.className = `
            absolute inset-0 items-center transition bg-transparent peer-checked:bg-secondary-interaction my-auto mx-auto justify-center rounded-full 
            pointer-events-none size-3
        `;

        // Flag icon
        const flagIcon = document.createElement('div');
        flagIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.FLAGS][option.icon], 18);

        // Language name
        const languageText = document.createElement('span');
        languageText.textContent = option.name;
        languageText.className = `border-b-2 border-transparent group-hover:border-secondary-interaction transition`

        // Event listeners for both radio input and wrapper
        const handleLanguageSelect = () => {
            if (!disabled) {
                radioInput.checked = true;
                updateTrigger(option);
            }
        };

        radioInput.addEventListener('change', handleLanguageSelect);
        radioWrapper.addEventListener('click', handleLanguageSelect);

        // Assemble radio option
        interRadioWrapper.appendChild(radioInput);
        interRadioWrapper.appendChild(innerContent);
        radioWrapper.appendChild(interRadioWrapper);
        radioWrapper.appendChild(flagIcon);
        radioWrapper.appendChild(languageText);

        radioContainer.appendChild(radioWrapper);
    });

    // Add dropdown functionality
    dropdownTrigger.addEventListener('click', () => {
        const isOpen = !dropdownContainer.classList.contains('hidden');

        dropdownContainer.classList.toggle('hidden');

        if (!isOpen) {
            dropdownTrigger.classList.add('border-secondary-dark', 'bg-base-white');
            dropdownTrigger.classList.remove('border-transparent', 'bg-transparent');
            dropdownIcon.classList.add('scale-y-[-1]');
        } else {
            dropdownTrigger.classList.add('border-transparent');
            dropdownTrigger.classList.remove('bg-base-white');
            dropdownTrigger.classList.remove('border-secondary-dark');
            dropdownIcon.classList.remove('scale-y-[-1]');
        }
    });

    document.addEventListener('click', (event) => {
        if (!wrapper.contains(event.target as Node)) {
            dropdownContainer.classList.add('hidden');
            dropdownTrigger.classList.add('border-transparent');
            dropdownTrigger.classList.remove('border-secondary-dark', 'bg-base-white');
            dropdownIcon.classList.remove('scale-y-[-1]');
        }
    });

    dropdownContainer.appendChild(radioContainer);
    wrapper.appendChild(dropdownTrigger);
    wrapper.appendChild(dropdownContainer);

    return wrapper;
};
