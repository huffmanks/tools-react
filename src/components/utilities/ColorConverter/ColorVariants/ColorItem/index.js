import { colord } from 'colord'

import './index.css'

const ColorItem = ({ color, hexColor, rgbColor, hslColor }) => {
    return (
        <>
            <div className='output'>
                <div className='item' style={{ borderColor: colord(color).lighten(0.1).toHex() }}>
                    Lighter: {colord(color).lighten(0.1).toHex()}
                </div>

                <div className='item' style={{ borderColor: colord(color).lighten(0.05).toHex() }}>
                    Light: {colord(color).lighten(0.05).toHex()}
                </div>

                <div className='item' style={{ borderColor: hexColor }}>
                    Color: {hexColor}
                </div>

                <div className='item' style={{ borderColor: colord(color).darken(0.05).toHex() }}>
                    Dark: {colord(color).darken(0.05).toHex()}
                </div>

                <div className='item' style={{ borderColor: colord(color).darken(0.1).toHex() }}>
                    Darker: {colord(color).darken(0.1).toHex()}
                </div>
            </div>

            <div className='output'>
                <div className='item' style={{ borderColor: colord(color).lighten(0.1).toRgbString() }}>
                    Lighter: {colord(color).lighten(0.1).toRgbString()}
                </div>

                <div className='item' style={{ borderColor: colord(color).lighten(0.05).toRgbString() }}>
                    Light: {colord(color).lighten(0.05).toRgbString()}
                </div>

                <div className='item' style={{ borderColor: rgbColor }}>
                    Color: {rgbColor}
                </div>

                <div className='item' style={{ borderColor: colord(color).darken(0.05).toRgbString() }}>
                    Dark: {colord(color).darken(0.05).toRgbString()}
                </div>

                <div className='item' style={{ borderColor: colord(color).darken(0.1).toRgbString() }}>
                    Darker: {colord(color).darken(0.1).toRgbString()}
                </div>
            </div>

            <div className='output'>
                <div className='item' style={{ borderColor: colord(color).lighten(0.1).toHslString() }}>
                    Lighter: {colord(color).lighten(0.1).toHslString()}
                </div>

                <div className='item' style={{ borderColor: colord(color).lighten(0.05).toHslString() }}>
                    Light: {colord(color).lighten(0.05).toHslString()}
                </div>

                <div className='item' style={{ borderColor: hslColor }}>
                    Color: {hslColor}
                </div>

                <div className='item' style={{ borderColor: colord(color).darken(0.05).toHslString() }}>
                    Dark: {colord(color).darken(0.05).toHslString()}
                </div>

                <div className='item' style={{ borderColor: colord(color).darken(0.1).toHslString() }}>
                    Darker: {colord(color).darken(0.1).toHslString()}
                </div>
            </div>
        </>
    )
}

export default ColorItem
