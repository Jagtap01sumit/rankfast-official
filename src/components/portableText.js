import React from 'react'
import PortableText from 'react-portable-text'

const Protabletext = ({ content }) => {
    return (
        <>
            <PortableText
                projectId='cyz6zl3a'
                dataset='production'
                content={content}
            />
        </>
    )
}

export default Protabletext