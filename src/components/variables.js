export const container = "container mx-auto px-4";
export const sectionTitleClass =
  "pb-10 leading-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center";

export const Spacer = ({ size }) => {
  return <div style={{ width: size, height: size }} />;
};
export const SpacerX = ({ size }) => {
  return <div style={{ width: size }} />;
};
export const SpacerY = ({ size }) => {
  return <div style={{ height: size }} />;
};
