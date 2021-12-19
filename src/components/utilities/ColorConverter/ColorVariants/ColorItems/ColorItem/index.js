import './index.css'

const ColorItem = ({ colorValue }) => {
    const handleClipboard = () => {
        return navigator.clipboard.writeText(colorValue)
    }

    return (
        <div className='color-item' style={{ borderColor: colorValue }} onClick={handleClipboard}>
            {colorValue}
        </div>
    )
}

export default ColorItem
