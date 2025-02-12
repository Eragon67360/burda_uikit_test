import './datePicker.css';
import { IconRegistry, IconCategory } from '../../../assets/icons';
export type DatePickerArgs = {
    label?: string;
    required?: boolean;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    language?: 'EN' | 'DE';
    onChange?: (date: string) => void;
};

const LOCALE_CONFIG = {
    EN: {
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'],
        resetButton: 'Reset',
        yearSelector: 'Select Year'
    },
    DE: {
        days: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        resetButton: 'Zurücksetzen',
        yearSelector: 'Jahr auswählen'
    }
};
const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
};

const formatDate = (date: Date, language: 'EN' | 'DE'): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

export const createDatePicker = ({
    label,
    required = false,
    error,
    placeholder = 'DD.MM.YYYY',
    disabled = false,
    value = '',
    language = 'EN',
    onChange
}: DatePickerArgs) => {
    const element = document.createElement('div');
    let currentDate = value ? parseDate(value) : new Date();
    let isYearView = false;

    const generateCalendar = (date: Date): (number | '')[][] => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startingDay = firstDay.getDay();
        const monthLength = lastDay.getDate();

        const weeks: (number | '')[][] = [];
        let week: (number | '')[] = [];

        for (let i = 0; i < startingDay; i++) {
            week.push('');
        }

        for (let day = 1; day <= monthLength; day++) {
            week.push(day);
            if ((day + startingDay) % 7 === 0 || day === monthLength) {
                weeks.push(week);
                week = [];
            }
        }

        return weeks;
    };
    const createYearGrid = (currentDate: Date): string => {
        const currentYear = currentDate.getFullYear();
        const startYear = currentYear - 50;
        const endYear = currentYear + 50;

        return `
            <div class="year-selector overflow-y-auto max-h-[300px] scrollbar-thin">
                <div class="grid grid-cols-3 gap-2 p-2">
                    ${Array.from({ length: endYear - startYear + 1 }, (_, i) => {
            const year = startYear + i;
            return `
                <button type="button" 
                        class="year-btn p-2 rounded transition-all duration-300 cursor-pointer hover:bg-secondary-light 
                                ${year === currentYear ? 'bg-secondary-interaction text-base-black' : ''}"
                        data-year="${year}">
                    ${year}
                </button>
            `;
        }).join('')}
                </div>
            </div>
        `;
    };

    const updateCalendarContent = (date: Date): void => {
        const calendar = element.querySelector('.calendar-content');
        if (!calendar) return;

        if (isYearView) {
            calendar.innerHTML = createYearGrid(date);
            attachYearEventListeners();
        } else {
            const weeks = generateCalendar(date);
            calendar.innerHTML = `
                <div class="flex justify-between items-center mb-4 gap-2">
                    <button type="button" class="prev-month p-2 rounded cursor-pointer hover:bg-secondary-extra-light transition-all flex items-center justify-center">
                        ${IconRegistry[IconCategory.SYSTEM].chevronLeft}
                    </button>
                    <div class="flex flex-col w-full rounded-md gap-2 p-2 text-teaser-copy-desktop items-center cursor-pointer month-year-selector hover:bg-secondary-extra-light transition-all">
                        <p>${LOCALE_CONFIG[language].months[date.getMonth()]} ${date.getFullYear()}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                            <path d="M7.35355 7.35354L12.8536 1.85355C13.0488 1.6583 13.0488 1.3417 12.8536 1.14644C12.6583 0.951186 12.3417 0.951185 12.1464 1.14644L6.99999 6.29287L1.85354 1.14644C1.65828 0.951185 1.34169 0.951185 1.14643 1.14644C0.95117 1.3417 0.95117 1.65829 1.14643 1.85355L6.64644 7.35356C6.8417 7.5488 7.15829 7.5488 7.35355 7.35354Z" fill="black" stroke="black" stroke-width="0.5"/>
                        </svg>
                    </div>
                    <button type="button" class="next-month p-2 rounded cursor-pointer hover:bg-secondary-extra-light transition-all flex items-center justify-center">
                        ${IconRegistry[IconCategory.SYSTEM].chevronRight}
                    </button>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center">
                    ${LOCALE_CONFIG[language].days
                    .map(day => `<div class="text-xs font-medium text-gray-500">${day}</div>`)
                    .join('')}
                    ${weeks.map(week =>
                        week.map(day =>
                            day !== '' ?
                                `<button type="button"
                        class="day-btn size-[2.3rem] transition-all cursor-pointer rounded hover:bg-secondary-light 
                                                ${day === currentDate.getDate() ? 'bg-secondary-interaction text-base-black hover:bg-secondary-light' : ''}"
                        data-date="${day}">
                        ${day}
                    </button>` :
                                '<div class="size-[2.3rem]"></div>'
                        ).join('')
                    ).join('')}
                </div>
            `;
            attachCalendarEventListeners();
        }
    };

    const attachCalendarEventListeners = () => {
        const calendar = element.querySelector('.calendar-content');
        const prevMonth = calendar?.querySelector('.prev-month');
        const nextMonth = calendar?.querySelector('.next-month');
        const monthYearSelector = calendar?.querySelector('.month-year-selector');

        prevMonth?.addEventListener('click', (e) => {
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendarContent(currentDate);
        });

        nextMonth?.addEventListener('click', (e) => {
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendarContent(currentDate);
        });

        monthYearSelector?.addEventListener('click', () => {
            isYearView = true;
            updateCalendarContent(currentDate);
        });

        const dayButtons = calendar?.querySelectorAll('.day-btn');
        dayButtons?.forEach((button) => {
            button.addEventListener('click', () => {
                const day = button.textContent;
                if (day) {
                    currentDate.setDate(parseInt(day));
                    const input = element.querySelector('input');
                    const calendarWrapper = element.querySelector('.calendar-wrapper');
                    if (input) {
                        input.value = formatDate(currentDate, language);
                    }
                    onChange?.(formatDate(currentDate, language));
                    calendarWrapper?.classList.add('hidden');
                }
            });
        });
    };

    const attachYearEventListeners = () => {
        const calendar = element.querySelector('.calendar-content');
        const yearButtons = calendar?.querySelectorAll('.year-btn');

        yearButtons?.forEach((button) => {
            button.addEventListener('click', () => {
                const year = button.getAttribute('data-year');
                if (year) {
                    currentDate.setFullYear(parseInt(year));
                    isYearView = false;
                    updateCalendarContent(currentDate);
                }
            });
        });
    };

    const handleInputChange = (e: Event) => {
        const input = e.target as HTMLInputElement;
        const value = input.value;

        if (/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
            const date = parseDate(value);
            if (!isNaN(date.getTime())) {
                currentDate = date;
                updateCalendarContent(date);
                onChange?.(formatDate(date, language));
            }
        }
    };

    element.innerHTML = `
    <div class="flex flex-col gap-2">
        ${label ? `<label class="text-sm font-medium text-gray-700">
            ${label}${required ? ' *' : ''}
        </label>` : ''}

        <div class="relative max-w-lg">
            <div class="absolute inset-y-0 end-4 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_470_21792)">
                        <path
                            d="M19.1667 2.0827H18.1906C17.8475 1.11168 16.9221 0.416016 15.8334 0.416016C14.7446 0.416016 13.8192 1.11164 13.4761 2.0827H12.3573C12.0141 1.11168 11.0887 0.416055 10 0.416055C8.91125 0.416055 7.98586 1.11168 7.64273 2.08273H6.52395C6.18082 1.11172 5.25543 0.416055 4.16668 0.416055C3.07793 0.416055 2.15254 1.11168 1.80941 2.0827H0.83332C0.373086 2.0827 0 2.45582 0 2.91605V7.08273V18.7494C0 19.2096 0.373086 19.5827 0.83332 19.5827H19.1666C19.6269 19.5827 20 19.2096 20 18.7494V7.0827V2.91605C20 2.45582 19.6269 2.0827 19.1667 2.0827ZM1.66668 3.74937H2.5C2.96023 3.74937 3.33332 3.37629 3.33332 2.91605C3.33332 2.45547 3.70605 2.08273 4.16664 2.08273C4.62723 2.08273 5 2.45543 5 2.91605C5 3.37668 4.62727 3.74937 4.16668 3.74937C3.70645 3.74937 3.33336 4.12246 3.33336 4.5827C3.33336 5.04293 3.70645 5.41602 4.16668 5.41602C5.25543 5.41602 6.18082 4.72039 6.52395 3.74934H8.33332C8.79355 3.74934 9.16664 3.37625 9.16664 2.91602C9.16664 2.45543 9.53937 2.0827 9.99996 2.0827C10.4605 2.0827 10.8333 2.45543 10.8333 2.91602C10.8333 3.3766 10.4606 3.74937 10 3.74937C9.53977 3.74937 9.16668 4.12246 9.16668 4.5827C9.16668 5.04293 9.53977 5.41602 10 5.41602C11.0887 5.41602 12.0141 4.72039 12.3573 3.74934H14.1667C14.6269 3.74938 15 3.37629 15 2.91605C15 2.45547 15.3727 2.08273 15.8333 2.08273C16.2939 2.08273 16.6666 2.45547 16.6666 2.91605C16.6666 3.37664 16.2939 3.74937 15.8333 3.74937C15.3731 3.74937 15 4.12246 15 4.5827C15 5.04293 15.3731 5.41602 15.8333 5.41602C16.9221 5.41602 17.8475 4.72039 18.1906 3.74934H18.3333V6.24934H1.66668V3.74937ZM1.66668 17.9161V7.91605H18.3334V17.9161H1.66668Z"
                            fill="black" />
                        <path
                            d="M4.99934 10.416C4.53934 10.416 4.16602 10.7893 4.16602 11.2493C4.16602 11.7093 4.53934 12.0827 4.99934 12.0827C5.45934 12.0827 5.83266 11.7093 5.83266 11.2493C5.83266 10.7893 5.45934 10.416 4.99934 10.416Z"
                            fill="black" />
                        <path
                            d="M9.99934 10.416C9.53934 10.416 9.16602 10.7893 9.16602 11.2493C9.16602 11.7093 9.53934 12.0827 9.99934 12.0827C10.4593 12.0827 10.8327 11.7093 10.8327 11.2493C10.8327 10.7893 10.4593 10.416 9.99934 10.416Z"
                            fill="black" />
                        <path
                            d="M14.9993 10.416C14.5393 10.416 14.166 10.7893 14.166 11.2493C14.166 11.7093 14.5393 12.0827 14.9993 12.0827C15.4593 12.0827 15.8327 11.7093 15.8327 11.2493C15.8327 10.7893 15.4593 10.416 14.9993 10.416Z"
                            fill="black" />
                        <path
                            d="M4.99934 14.582C4.53934 14.582 4.16602 14.9554 4.16602 15.4154C4.16602 15.8754 4.53934 16.2487 4.99934 16.2487C5.45934 16.2487 5.83266 15.8754 5.83266 15.4154C5.83266 14.9554 5.45934 14.582 4.99934 14.582Z"
                            fill="black" />
                        <path
                            d="M9.99934 14.582C9.53934 14.582 9.16602 14.9554 9.16602 15.4154C9.16602 15.8754 9.53934 16.2487 9.99934 16.2487C10.4593 16.2487 10.8327 15.8754 10.8327 15.4154C10.8327 14.9554 10.4593 14.582 9.99934 14.582Z"
                            fill="black" />
                        <path
                            d="M14.9993 14.582C14.5393 14.582 14.166 14.9554 14.166 15.4154C14.166 15.8754 14.5393 16.2487 14.9993 16.2487C15.4593 16.2487 15.8327 15.8754 15.8327 15.4154C15.8327 14.9554 15.4593 14.582 14.9993 14.582Z"
                            fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_470_21792">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <input type="text" class="w-full h-[2.75rem] px-4 py-0 border rounded-[0.25rem] 
                        transition-all duration-200 outline-hidden placeholder:text-neutral-800 
                        disabled:bg-neutral-100 disabled:border-transparent disabled:cursor-not-allowed 
                        disabled:placeholder:text-neutral-400 bg-neutral-100 
                        placeholder-shown:bg-neutral-100 border-neutral-450 
                        enabled:active:border-secondary-extra-light active:bg-secondary-extra-light 
                        active:ring-0 focus:ring-0 focus:border-base-black"
                placeholder="${placeholder}" ${disabled ? 'disabled' : ''} value="${value}">

            <div class="absolute z-50 left-0 right-0 mt-1 w-80 bg-white shadow-popover rounded-lg p-4 hidden calendar-wrapper">
                <div class="calendar-content">

                </div>

                <div class="mt-4 border-t pt-3">
                    <button type="button" class="w-full py-2 px-4 flex items-center gap-3 justify-center bg-base-white hover:bg-neutral-100 border border-neutral-400
                                    text-base-black cursor-pointer rounded-[0.25rem] transition-colors duration-200 reset-date">
                        ${IconRegistry[IconCategory.SYSTEM].arrowLeft}
                        <p class="text-button-label-desktop">${LOCALE_CONFIG[language].resetButton}</p>
                    </button>
                </div>
            </div>
        </div>
        ${error ? `<p class="text-sm text-red-500 mt-1">${error}</p>` : ''}
    </div>
    `;


    const input = element.querySelector('input');
    input?.addEventListener('input', handleInputChange);
    input?.addEventListener('click', () => {
        if (!disabled) {
            const calendarWrapper = element.querySelector('.calendar-wrapper');
            calendarWrapper?.classList.toggle('hidden');
            updateCalendarContent(currentDate);
        }
    });
    const resetButton = element.querySelector('.reset-date');
    resetButton?.addEventListener('click', () => {
        if (input) {
            input.value = '';
            onChange?.('');
            const calendarWrapper = element.querySelector('.calendar-wrapper');
            calendarWrapper?.classList.add('hidden');
        }
    });
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as Node;
        const calendarWrapper = element.querySelector('.calendar-wrapper');
        const isNavigationButton = (target as Element).closest('.prev-month, .next-month');
        const isCalendarButton = (target as Element).closest('.day-btn, .year-btn, .month-year-selector');
        const isResetButton = (target as Element).closest('.reset-date');

        if (!element.contains(target) &&
            !isNavigationButton &&
            !isCalendarButton &&
            !isResetButton) {
            calendarWrapper?.classList.add('hidden');
        }
    });
    return element;

};
