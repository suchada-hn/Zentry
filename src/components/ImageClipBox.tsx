interface ImageClipBoxProps {
    src: string,
    clipClass: string
}

const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass }) => {
    return (
        <div className={clipClass}>
            <img src={src} />
        </div>
    )
}

export default ImageClipBox