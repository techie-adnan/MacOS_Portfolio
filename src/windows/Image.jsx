import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, image, imageUrl, subtitle, description = [] } = data;
  const imgSrc = imageUrl ?? image;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 content">
        {imgSrc && (
          <div className="mb-3 flex justify-center">
            <img src={imgSrc} alt={name} className="max-w-full h-auto rounded" />
          </div>
        )}

        {subtitle && (
          <p className="text-sm text-center text-gray-600 mb-3">{subtitle}</p>
        )}

        {Array.isArray(description) && description.map((para, i) => (
          <p key={i} className="mb-2 text-sm leading-relaxed">{para}</p>
        ))}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;

