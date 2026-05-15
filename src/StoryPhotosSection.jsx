import grandparentsPhoto from "./assets/grandparents.jpg";
import weddingPhoto from "./assets/mom-dad-wedding.jpg";

function StoryPhotoCard({ image, alt, prompt, children }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d9c7ad] bg-[#fffaf2] shadow-sm">
      <div className="bg-[#e8dac8]">
        <img
          src={image}
          alt={alt}
          className="h-80 w-full object-contain bg-[#e8dac8] p-3 sm:h-96"
        />
      </div>

      <div className="p-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a85f4c]">
          Story prompt
        </p>

        <h3 className="text-2xl font-black tracking-tight text-[#241925]">
          “{prompt}”
        </h3>

        <p className="mt-4 text-sm leading-6 text-[#66584e]">{children}</p>
      </div>
    </div>
  );
}

export default function StoryPhotosSection() {
  return (
    <section
      id="story-photos"
      className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-[#d9c7ad] bg-[#ead1bd] px-5 py-20 shadow-sm sm:px-8 lg:px-10"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#8d4d3f]">
          Story Photos
        </p>

        <h2 className="text-4xl font-black tracking-tight text-[#241925] sm:text-5xl">
          The photo is only half the memory.
        </h2>

        <p className="mt-4 text-lg leading-8 text-[#66584e]">
          Old photos hold questions, voices, recipes, places, jokes, and family
          details that can disappear if nobody asks. Kinnerly helps save the
          story behind the picture.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StoryPhotoCard
          image={grandparentsPhoto}
          alt="Old family photo of grandparents"
          prompt="What were Grandpa and Grandma like when they were young?"
        >
          I wish I knew more about what they were like then — what made them
          laugh, what they worried about, and what they dreamed their family
          would become.
        </StoryPhotoCard>

        <StoryPhotoCard
          image={weddingPhoto}
          alt="Old wedding photo of parents"
          prompt="Look how young Mom and Dad were. What do you remember about this day?"
        >
          They look so young here. I’d love to know what they were feeling that
          day, who was there, and what everyone remembered most.
        </StoryPhotoCard>
      </div>
    </section>
  );
}