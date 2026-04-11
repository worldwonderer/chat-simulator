export default function ImageShim(props) {
  const { src, alt, width, height, className, style, fill, ...rest } = props;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ color: 'transparent', ...(style || {}) }}
      loading={rest.loading ?? 'lazy'}
      decoding={rest.decoding ?? 'async'}
      data-nimg={fill ? 'fill' : '1'}
      {...rest}
    />
  );
}
