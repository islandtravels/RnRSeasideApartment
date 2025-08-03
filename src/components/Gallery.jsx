import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Page_Label from './Page_Label';

const Gallery = ({ imgList }) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="gallery_container">
            <Page_Label pageLabel={"Gallery"}  blue/>
            <br />
            <h2>A Glimps Of Our Amazing Unit!</h2>
            <br />
            <br />
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={'gallery'}
            >
                {imgList.map((img, index) => (
                    <a 
                        href={img} 
                        key={index}
                        className={'gallery__item'}
                        data-lg-size="400-600-375, 600-900-480, 1600-2400"
                    >
                        <img alt="img1" src={img} />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}

export default Gallery;