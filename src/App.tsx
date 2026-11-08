import { useState } from "react";
import {
  ArrowRight,
  Bus,
  Check,
  Compass,
  Camera,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import camel from "./assets/tours/camel-ride.png";
import couple from "./assets/tours/doha-couple.png";
import skyline from "./assets/tours/doha-family.png";
import falconDesert from "./assets/tours/falcon-desert.png";
import falconFamily from "./assets/tours/falcon-family.png";
import falconGuest from "./assets/tours/falcon-guest.png";
import falconPortrait from "./assets/tours/falcon-portrait.png";
import sea from "./assets/tours/inland-sea.png";
import katara from "./assets/tours/katara-guests.png";
import museum from "./assets/tours/museum-group.png";

const wa = (tour = "a private Qatar tour") =>
  `https://wa.me/97474759343?text=${encodeURIComponent(`Hello Aziz, I would like to enquire about ${tour}.`)}`;
const tours = [
  [
    "Desert Safari",
    "Cross golden dunes, visit the Inland Sea and experience the spirit of the desert.",
    sea,
    Compass,
  ],
  [
    "Doha City Tour",
    "Discover Doha’s skyline, Katara, The Pearl and its most memorable landmarks.",
    skyline,
    Landmark,
  ],
  [
    "Museum & Souq Waqif",
    "Explore world-class museums, local heritage and the vibrant old souq.",
    museum,
    Star,
  ],
  [
    "Local Tour Guide",
    "See Qatar through local eyes with an itinerary shaped around you.",
    katara,
    MapPin,
  ],
  [
    "Airport Transfer",
    "A smooth, comfortable and reliable private airport transfer.",
    couple,
    Plane,
  ],
  [
    "Transit Tour",
    "Turn your Doha layover into a memorable tour planned around your flight.",
    falconPortrait,
    Bus,
  ],
  [
    "Private Family Tour",
    "Flexible sightseeing designed for families, couples and private groups.",
    falconFamily,
    Users,
  ],
] as const;
const photos = [
  [camel, "Guest enjoying a camel ride"],
  [skyline, "Family tour with the Doha skyline"],
  [museum, "Group outside the National Museum of Qatar"],
  [falconDesert, "Guest meeting a falcon"],
  [sea, "Guest enjoying the Inland Sea dunes"],
  [katara, "Guests exploring Katara"],
  [falconPortrait, "Traditional falcon experience"],
  [couple, "Couple on a Doha city tour"],
  [falconFamily, "Family falcon experience"],
  [falconGuest, "Guest enjoying a falcon encounter"],
] as const;
const socials = [
  [
    "Tripadvisor",
    "https://www.tripadvisor.co.uk/Attraction_Review-g294009-d34044600-Reviews-Explore_Qatar_with_Aziz-Doha.html",
    Star,
  ],
  ["Instagram", "https://www.instagram.com/saki.ahmad.393?vrfl=cGdjNHR2c2pyaHQw", Camera],
  ["Facebook", "https://www.facebook.com/share/1LjJ5yH8WU/", Users],
  ["TikTok", "https://www.tiktok.com/@sakilahmad9331?_r=1&_t=ZS-9BCxWikrbLo", Music2],
] as const;

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <header>
        <a className="brand" href="#home">
          <b>A</b>
          <span>
            <strong>Explore Qatar</strong>
            <i>with Aziz</i>
          </span>
        </a>
        <nav className={open ? "open" : ""}>
          {["Home", "Experiences", "Why Aziz", "Gallery", "Contact"].map((x, i) => (
            <a
              key={x}
              onClick={() => setOpen(false)}
              href={`#${["home", "experiences", "about", "gallery", "contact"][i]}`}
            >
              {x}
            </a>
          ))}
          <a className="book" href={wa()} target="_blank">
            Plan my tour
          </a>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <img src={skyline} alt="Guests exploring Doha with Aziz" />
        <div className="shade" />
        <div className="heroText">
          <Eyebrow light>Your private guide to Qatar</Eyebrow>
          <h1>
            Explore. Experience.
            <br />
            <em>Enjoy Qatar.</em>
          </h1>
          <p>
            Discover Doha’s culture, desert and hidden stories through thoughtfully curated private
            tours with a trusted local guide.
          </p>
          <div className="actions">
            <Button href={wa()}>Plan your experience</Button>
            <a className="ghost" href="#experiences">
              Explore tours
            </a>
          </div>
          <div className="trust">
            <span>
              <b>7</b> Curated experiences
            </span>
            <span>
              <b>100%</b> Private & flexible
            </span>
            <span>
              <b>Doha</b> Local expertise
            </span>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div>
          <Eyebrow>Made personal</Eyebrow>
          <h2>
            Qatar, beyond
            <br />
            the <em>postcard.</em>
          </h2>
        </div>
        <div className="introCopy">
          <p>
            From the energy of Souq Waqif to the stillness of the Inland Sea, every journey is built
            around what you want to see, feel and remember.
          </p>
          <a className="textLink" href="#about">
            Meet your local guide <ArrowRight />
          </a>
        </div>
      </section>

      <section className="experiences section" id="experiences">
        <Heading
          eyebrow="Choose your journey"
          title={
            <>
              Signature <em>experiences.</em>
            </>
          }
          text="Private, relaxed and thoughtfully paced—choose a favourite or ask Aziz to create your perfect day."
        />
        <div className="tourGrid">
          {tours.map(([name, text, image, Icon], i) => (
            <article className={`tour t${i}`} key={name}>
              <img src={image} alt="" />
              <div className="tourShade" />
              <div className="tourInfo">
                <span>
                  <Icon />
                </span>
                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <a href={wa(name)} target="_blank">
                    Enquire now <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="collage">
          <img src={falconDesert} alt="Guest enjoying Qatari falconry" />
          <img src={camel} alt="Camel ride in Qatar" />
          <b>
            Local
            <br />
            insight
          </b>
        </div>
        <div className="aboutText">
          <Eyebrow>Why travel with Aziz</Eyebrow>
          <h2>
            Come as a guest.
            <br />
            Leave as a <em>friend.</em>
          </h2>
          <p>
            Exploring with a local changes everything. Aziz brings warmth, flexibility and genuine
            knowledge to every tour, making space for moments that cannot be found in a guidebook.
          </p>
          <ul>
            {[
              "Private tours shaped around your interests",
              "Comfortable experiences for couples and families",
              "Reliable airport pickup and flexible timing",
              "Local culture shared with care and authenticity",
            ].map((x) => (
              <li key={x}>
                <Check />
                {x}
              </li>
            ))}
          </ul>
          <Button href={wa("a personalised tour")}>Chat with Aziz</Button>
        </div>
      </section>

      <aside className="quote">
        <Star />
        <p>“The best journeys are not only about where you go, but who makes you feel welcome.”</p>
        <span>Explore Qatar with Aziz</span>
      </aside>

      <section className="gallery section" id="gallery">
        <Heading
          eyebrow="Real guests, real moments"
          title={
            <>
              Memories from <em>Qatar.</em>
            </>
          }
        />
        <div className="photoGrid">
          {photos.map(([src, alt], i) => (
            <figure className={`p${i}`} key={src}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactBox">
          <div>
            <Eyebrow light>Your Qatar story starts here</Eyebrow>
            <h2>
              Ready to explore
              <br />
              <em>with Aziz?</em>
            </h2>
            <p>
              Share your dates, group size and what you would love to see. I’ll help create a
              relaxed private experience just for you.
            </p>
          </div>
          <div className="contactLinks">
            <Contact href={wa()} icon={MessageCircle} label="WhatsApp" value="+974 7475 9343" />
            <Contact
              href="tel:+97474759343"
              icon={Phone}
              label="Call Aziz"
              value="+974 7475 9343"
            />
            <Contact
              href="mailto:Sakil74759343@gmail.com"
              icon={Mail}
              label="Email"
              value="Sakil74759343@gmail.com"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="footTop">
          <div>
            <a className="brand" href="#home">
              <b>A</b>
              <span>
                <strong>Explore Qatar</strong>
                <i>with Aziz</i>
              </span>
            </a>
            <p>Private local tours, genuine moments and warm Qatari hospitality.</p>
          </div>
          <div className="location">
            <MapPin />
            <span>
              <small>Based in</small>Doha, Qatar
            </span>
          </div>
          <div>
            <small>Follow the journey</small>
            <div className="socials">
              {socials.map(([label, url, Icon]) => (
                <a key={label} href={url} target="_blank" title={label} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footBottom">
          <span>© {new Date().getFullYear()} Explore Qatar with Aziz</span>
          <span>
            <ShieldCheck /> Private tours • Local expertise • Personal service
          </span>
        </div>
      </footer>
      <a className="float" href={wa()} target="_blank" aria-label="WhatsApp Aziz">
        <MessageCircle />
      </a>
    </main>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="button" href={href} target="_blank">
      {children}
      <ArrowRight />
    </a>
  );
}
function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
function Contact({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}>
      <span>
        <Icon />
      </span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
      <ArrowRight />
    </a>
  );
}
