export default function Result() {
  return (
    <section className="flex w-full max-w-screen-sm flex-col items-center justify-center gap-5 rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue py-6 sm:w-1/2 sm:justify-around sm:gap-0 sm:rounded-3xl ">
      <h3 className="text-lg font-bold text-light-lavender sm:text-2xl">
        Your Result
      </h3>
      <figure className="flex h-36 w-36 sm:w-44 sm:h-44 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue text-center font-bold text-light-lavender">
        <span className="block text-6xl font-extrabold text-white">76</span> of
        100
      </figure>
      <figcaption className="mx-10 mb-3 text-center">
        <h2 className="text-2xl font-bold text-white">Great</h2>
        <p className="text-m mt-1 sm:mt-2 max-w-xs sm:leading-6 leading-5 text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </figcaption>
    </section>
  );
}
