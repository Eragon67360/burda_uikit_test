import { createPopup, PopupArgs, PopupPosition } from "./Popup";

type Toast = {
    element: HTMLElement;
    position: PopupPosition;
    timerId: number;
};

export class ToastManager {
    private static instance: ToastManager;
    private toasts: Map<string, Toast> = new Map();
    private maxToasts: number = 1;

    private constructor() { }

    public static getInstance(): ToastManager {
        if (!ToastManager.instance) {
            ToastManager.instance = new ToastManager();
        }
        return ToastManager.instance;
    }

    public show(args: PopupArgs): void {
        const position = args.position;

        this.removeToastAtPosition(position);

        const toastElement = createPopup({
            ...args,
            onClose: () => {
                this.removeToastAtPosition(position);
                args.onClose?.();
            }
        });

        const toastId = `toast-${position}-${Date.now()}`;

        const timerId = window.setTimeout(() => {
            this.removeToastAtPosition(position);
        }, 8000);

        this.toasts.set(toastId, {
            element: toastElement,
            position,
            timerId
        });

        document.body.appendChild(toastElement);
    }

    private removeToastAtPosition(position: PopupPosition): void {
        for (const [id, toast] of this.toasts.entries()) {
            if (toast.position === position) {
                clearTimeout(toast.timerId);

                const element = toast.element.firstElementChild as HTMLElement;
                if (element) {
                    const exitTransform = position.startsWith('top')
                        ? 'translate-y-[-100%]'
                        : 'translate-y-[100%]';

                    element.classList.add(exitTransform, 'opacity-0');

                    element.addEventListener('transitionend', () => {
                        toast.element.remove();
                    }, { once: true });
                }

                this.toasts.delete(id);
                break;
            }
        }
    }

    public clearAll(): void {
        this.toasts.forEach((toast, id) => {
            clearTimeout(toast.timerId);
            toast.element.remove();
        });
        this.toasts.clear();
    }
}
