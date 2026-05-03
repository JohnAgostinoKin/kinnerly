import grandparentsPhoto from "./assets/grandparents.jpg";
import weddingPhoto from "./assets/mom-dad-wedding.jpg";

function StoryPhotoCard({ image, alt, label, prompt, memory }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
      <img
  src={image}
  alt={alt}
  className="h-72 w-full object-contain bg-stone-100 p-4"
/>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
          {label}
        </p>

        <p className="mt-3 text-xl font-semibold leading-8 text-stone-950">
          {prompt}
        </p>

        <div className="mt-5 rounded-2xl bg-stone-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Example memory
          </p>
          <p className="mt-2 text-sm leading-7 text-stone-700">{memory}</p>
        </div>
      </div>
    </div>
  );
}

export default function StoryPhotosSection() {
  return (
    <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-rose-100 bg-rose-50 px-5 py-20 shadow-sm sm:px-8 lg:px-10">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
          Story Photos
        </p>

        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Old photos hold more than faces.
        </h2>

        <p className="mt-4 text-lg leading-8 text-stone-600">
          Upload a meaningful photo, ask a simple question, and turn a moment
          from the past into a memory your family can keep.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StoryPhotoCard
          image={grandparentsPhoto}
          alt="Vintage photo of grandparents standing together"
          label="Family example"
          prompt="What were Grandpa and Grandma like when they were young?"
          memory="They were strong, funny, and always had people around them. Grandpa was proud and steady, and Grandma had a way of making everyone feel at home."
        />

        <StoryPhotoCard
          image={weddingPhoto}
          alt="Vintage wedding photo of Mom and Dad when they were young"
          label="Family example"
          prompt="Look how young Mom and Dad were. What do you remember about this day?"
          memory="It was a joyful day full of hope, family, and celebration. Everyone talked about how happy they looked and how much promise the future seemed to hold."
        />
      </div>

      <div className="mt-8 rounded-3xl border border-white/70 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">
          Why it matters
        </p>
        <p className="mt-3 text-base leading-8 text-stone-700">
          A photo can spark stories that might otherwise disappear. Kinnerly
          helps turn old pictures into shared memories, family history, and
          meaningful conversations.
        </p>
      </div>
    </section>
  );
}
