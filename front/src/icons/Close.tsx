type CloseProps = {
  height?: number | string;
  width?: number | string;
  color?: string;
};

const Close = ({ height = 32, width = 32, color = "#e42c5a" }: CloseProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 256 256">
      <path
        fill={color}
        d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
      ></path>
    </svg>
  );
};

export default Close;
