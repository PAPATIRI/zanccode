import Image from 'next/image';
import { getStrapiMedia } from '../lib/media';

const ImageCustom = ({ gambar, width, height, styles }) => {
    const { alternativeText } = gambar.data.attributes;

    return (
        <Image
            width={width}
            height={height}
            className={styles}
            src={getStrapiMedia(gambar)}
            alt={alternativeText || ''}
        />
    );
};

export default ImageCustom;
