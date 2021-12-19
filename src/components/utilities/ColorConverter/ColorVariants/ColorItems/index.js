import ColorItem from './ColorItem'

import './index.css'

const ColorItems = ({ darkest, darker, original, lighter, lightest }) => {
    return (
        <div className='color-output'>
            <ColorItem colorValue={lightest} />
            <ColorItem colorValue={lighter} />
            <ColorItem colorValue={original} />
            <ColorItem colorValue={darker} />
            <ColorItem colorValue={darkest} />
        </div>
    )
}

export default ColorItems
