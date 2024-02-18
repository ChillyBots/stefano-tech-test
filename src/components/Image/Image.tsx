import "./style.css";

type ImageProps = {
	extraClassName?: string;
	mediaImages: { url: string; mediaQuery: string }[];
	defaultImgUrl: string;
	alt: string;
};

const Image = ({ extraClassName, mediaImages, defaultImgUrl, alt }: ImageProps) => {
	return (
		<picture>
			{mediaImages.length > 0 &&
				mediaImages.map((item, index) => {
					return <source key={index} srcSet={item.url} media={`(${item.mediaQuery})`} />;
				})}
			<img className={`img${extraClassName ? `${extraClassName}` : ""}`} src={defaultImgUrl} alt={alt} />
		</picture>
	);
};

export default Image;
