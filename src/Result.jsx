export default function Result() {
  return (
    <section className="rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue h-96 w-96 flex flex-col items-center justify-center gap-7">
      <h3 className="text-l text-light-lavender font-bold">Your Result</h3>
      <figure className="text-light-lavender font-bold text-center bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-36 h-36 flex flex-col items-center justify-center">
        <span className="block text-6xl font-extrabold text-white">76</span> of
        100
      </figure>
      <figcaption className="mx-10 mb-3 text-center">
        <h2 className="text-2xl font-bold text-white">Great</h2>
        <p className="mt-1 leading-6 text-light-lavender">
          You score higher than 65% of the people who have taken these tests.
        </p>
      </figcaption>
    </section>
  );
}
