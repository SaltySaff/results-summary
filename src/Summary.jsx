import iconReaction from '../assets/images/icon-reaction.svg';
import iconMemory from '../assets/images/icon-memory.svg';
import iconVerbal from '../assets/images/icon-verbal.svg';
import iconVisual from '../assets/images/icon-visual.svg';

export default function Summary() {
  return (
    <section className="flex w-full max-w-screen-sm flex-col">
      <h3 className="text-lg font-bold text-dark-gray-blue sm:text-2xl sm:mb-1">
        Summary
      </h3>
      <ul className="mt-4 flex flex-col gap-4">
        <li className="text-m flex justify-between rounded-lg bg-light-red/10 p-4 font-bold text-light-red">
          <figure className="flex items-center gap-3">
            <img src={iconReaction} alt="lightning bolt icon" />
            <figcaption>Reaction</figcaption>
          </figure>
          <span className="font-bold text-dark-gray-blue/50">
            <span className="text-dark-gray-blue">80</span> / 100
          </span>
        </li>
        <li className="text-m flex justify-between rounded-lg bg-orangey-yellow/10 p-4 font-bold text-orangey-yellow">
          <figure className="flex items-center gap-3">
            <img src={iconMemory} alt="brain icon" />
            <figcaption>Memory</figcaption>
          </figure>
          <span className="font-bold text-dark-gray-blue/50">
            <span className="text-dark-gray-blue">92</span> / 100
          </span>
        </li>
        <li className="text-m flex justify-between rounded-lg bg-green-teal/10 p-4 font-bold text-green-teal">
          <figure className="flex items-center gap-3">
            <img src={iconVerbal} alt="speech bubble icon" />
            <figcaption>Verbal</figcaption>
          </figure>
          <span className="font-bold text-dark-gray-blue/50">
            <span className="text-dark-gray-blue">61</span> / 100
          </span>
        </li>
        <li className="text-m flex justify-between rounded-lg bg-cobalt-blue/10 p-4 font-bold text-cobalt-blue">
          <figure className="flex items-center gap-3">
            <img src={iconVisual} alt="eye icon" />
            <figcaption>Visual</figcaption>
          </figure>
          <span className="text-dark-gray-blue/50">
            <span className="text-dark-gray-blue">72</span> / 100
          </span>
        </li>
      </ul>
    </section>
  );
}
