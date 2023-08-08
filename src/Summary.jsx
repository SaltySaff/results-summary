import iconReaction from '../assets/images/icon-reaction.svg';
import iconMemory from '../assets/images/icon-memory.svg';
import iconVerbal from '../assets/images/icon-verbal.svg';
import iconVisual from '../assets/images/icon-visual.svg';

// to make icons work when deployed
const iconMap = {
  './assets/images/icon-reaction.svg': iconReaction,
  './assets/images/icon-memory.svg': iconMemory,
  './assets/images/icon-verbal.svg': iconVerbal,
  './assets/images/icon-visual.svg': iconVisual,
};

import data from '../data.json';
import { useState, useEffect } from 'react';

export default function Summary() {
  // simulating pulling data from an api and save it as state
  const [listItemsData, setListItemsData] = useState([]);

  useEffect(() => {
    setListItemsData(data);
  }, [listItemsData]);

  const listItems = listItemsData.map((category) => {
    return (
      <li
        key={category.id}
        className="text-m flex justify-between rounded-lg bg-light-red/10 p-4 font-bold text-light-red"
      >
        <figure className="flex items-center gap-3">
          <img src={iconMap[category.icon]} />
          <figcaption>{category.category}</figcaption>
        </figure>
        <span className="font-bold text-dark-gray-blue/50">
          <span className="text-dark-gray-blue">{category.score}</span> / 100
        </span>
      </li>
    );
  });

  return (
    <section className="flex w-full max-w-screen-sm flex-col">
      <h3 className="text-lg font-bold text-dark-gray-blue sm:mb-1 sm:text-2xl">
        Summary
      </h3>
      <ul
        className="mt-4 flex flex-col gap-4 
        [&>*:nth-child(1)]:bg-light-red/10 [&>*:nth-child(1)]:text-light-red
        [&>*:nth-child(2)]:bg-orangey-yellow/10 [&>*:nth-child(2)]:text-orangey-yellow
        [&>*:nth-child(3)]:bg-green-teal/10 [&>*:nth-child(3)]:text-green-teal
        [&>*:nth-child(4)]:bg-cobalt-blue/10 [&>*:nth-child(4)]:text-cobalt-blue"
      >
        {listItems}
      </ul>
    </section>
  );
}

// fetch(such and such) setData(such and such)
