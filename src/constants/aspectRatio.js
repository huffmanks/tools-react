export const initialValues = {
    originalWidth: '',
    originalHeight: '',
    selectedType: 'width',
    newSize: '',
}

export const aspectInputs = [
    {
        name: 'originalWidth',
        label: 'Width',
        placeholder: '1920',
        isAutoFocused: true,
    },
    {
        name: 'originalHeight',
        label: 'Height',
        placeholder: '1080',
    },
    {
        name: 'newSize',
        label: 'Width',
        placeholder: '500',
        isDynamic: true,
    },
]
