import ImageViewer from 'react-simple-image-viewer';

const Viwer = (image) => {
    

    return (
        <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
        />
    );
}

export default Viwer;