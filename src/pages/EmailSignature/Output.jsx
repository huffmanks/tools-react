import { useRef } from 'react'

import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

import './_index.css'

const Output = (values) => {
    const resultRef = useRef(null)

    const handleClick = () => {
        let range = document.createRange()
        range.selectNode(resultRef.current)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
    }
    return (
        <>
            {Object.values(values).map((value, index) => (
                <div key={index} className='output'>
                    <div className='result' ref={resultRef}>
                        <div className='name'>{value.fullName}</div>
                        <div className='title'>{value.title}</div>
                        <div>
                            <div className='contact'>
                                Email: <a href={`mailto:${value.email}`}>{value.email}</a>
                            </div>

                            <div className='contact'>Phone: {value.phone}</div>

                            {value.cellPhone && <div className='contact'>Cell: {value.cellPhone}</div>}
                            {value.fax && <div className='contact'>Fax: {value.fax}</div>}
                            {value.website && (
                                <div className='contact'>
                                    Web: <a href={value.website}>{value.website}</a>
                                </div>
                            )}
                        </div>

                        <div className='address'>
                            Wofford College <br />
                            {value.department} <br />
                            121 College St. Spartanburg, S.C. 29303
                        </div>
                    </div>
                    <IconButton className='copy' style={{ position: 'absolute' }} onClick={handleClick}>
                        <ContentCopyIcon color='primary' />
                    </IconButton>
                </div>
            ))}
        </>
    )
}

export default Output
