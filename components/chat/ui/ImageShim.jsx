export default function ImageShim(props) {
  const {
    src,
    alt,
    width,
    height,
    className,
    style,
    fill,
    priority,
    unoptimized,
    placeholder,
    blurDataURL,
    quality,
    loader,
    loading,
    decoding,
    ...imgProps
  } = props;

  return (
    <img
      {...imgProps}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ color: 'transparent', ...(style || {}) }}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? 'async'}
      data-nimg={fill ? 'fill' : '1'}
    />
  );
}
