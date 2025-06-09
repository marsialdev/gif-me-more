import { Gif } from './../../types';

type GifProps = {
  gif: Gif;
};

export const GifItem = ({ gif }: GifProps) => {
  return (
    <a
      href={gif.url}
      target="_blank"
      rel="noopener, noreferrer, nofollow"
      title="Abrir gif"
      aria-label="Abrir gif en otra ventana"
      className="group"
    >
      <div className="space-y-1">
        <img
          className="w-full object-cover object-center rounded-xl overflow-hidden md:h-55"
          src={gif.url}
          alt={gif.title}
        />
      </div>
      <h3 className="group-hover:text-gray-300 transition-colors duration-150 ease-in text-lg text-gray-400">
        {gif.title}
      </h3>
    </a>
  );
};
