export const getPrimaryColorMode = () => {
    const storedMode = localStorage.getItem('primaryColorMode');
    return storedMode === 'dark';
};

export const setPrimaryColorMode = (isDark: boolean) => {
    localStorage.setItem('primaryColorMode', isDark ? 'dark' : 'light');
};