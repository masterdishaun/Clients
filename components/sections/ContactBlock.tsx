import { firm } from "@/lib/content";

export default function ContactBlock() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 06 / Make Contact</div>
            <h2 className="font-display text-display-lg text-ink leading-[1.02]">
              Tell us what
              <br />
              you're facing.
            </h2>
            <p className="mt-6 text-ink/80 max-w-md">
              Every enquiry is reviewed by a qualified solicitor. We will reply within one working
              day.
            </p>

            <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 max-w-xl" action={`mailto:${firm.email}`} method="post" encType="text/plain">
              {[
                { n: "name", l: "Name", type: "text" },
                { n: "email", l: "Email", type: "email" },
              ].map((f) => (
                <label key={f.n} className="block">
                  <span className="kicker text-ink/70">{f.l}</span>
                  <input
                    type={f.type}
                    name={f.n}
                    required
                    className="mt-3 w-full bg-transparent border-b border-ink/30 focus:border-ink outline-none py-2 text-ink"
                  />
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="kicker text-ink/70">Matter / Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-3 w-full bg-transparent border-b border-ink/30 focus:border-ink outline-none py-2 text-ink resize-none"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 hover:bg-brass transition-colors self-start md:col-span-2 w-fit"
              >
                Submit enquiry
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9" data-reveal data-delay="140">
            <div className="border-t-2 border-ink pt-8">
              <div className="kicker text-ink/70">Office</div>
              <p className="mt-3 font-display text-xl text-ink leading-[1.3]">{firm.address}</p>
            </div>
            <div className="border-t border-ink/20 pt-6 mt-8 space-y-5 text-sm text-ink/75">
              <div>
                <div className="kicker text-ink/70">Telephone</div>
                <a className="font-display text-xl text-ink mt-1 block" href={firm.phoneHref}>
                  {firm.phone}
                </a>
              </div>
              <div>
                <div className="kicker text-ink/70">Emergency</div>
                <a className="font-display text-xl text-ink mt-1 block" href={firm.emergencyHref}>
                  {firm.emergency}
                </a>
              </div>
              <div>
                <div className="kicker text-ink/70">Email</div>
                <a className="font-display text-lg text-ink mt-1 block break-all" href={`mailto:${firm.email}`}>
                  {firm.email}
                </a>
              </div>
              <div>
                <div className="kicker text-ink/70">Hours</div>
                <p className="mt-1">{firm.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
