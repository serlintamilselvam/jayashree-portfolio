
function ImageContent(props) {
    return (
        <div className="image-content">
            <img 
                alt={ props.imageContent.alt } 
                src={ props.imageContent.url } 
            />
        </div>
    )
}

export default ImageContent