
function TextContent(props) {
    return (
        <div className="text-content">
            
            <h3 className={(props.titleColor ? 'section-sub-title' : 'blue-section-sub-title')}>
                { props.textContent.title }
            </h3>
            
            { props.textContent.texts.length > 0 &&
                props.textContent.texts.map((singleContent, key) => {
                    return (
                        <p key={ key }>{ singleContent }</p>
                    )
                })
            }
        </div>
    )
}

export default TextContent