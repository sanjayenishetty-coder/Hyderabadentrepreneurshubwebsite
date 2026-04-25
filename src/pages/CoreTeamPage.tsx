import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Linkedin, Mail } from 'lucide-react';
import sanjayPhoto from '../assets/sanjay_enishetty.png';
import nareshPhoto from '../assets/naresh_kuchi.jpg';
import saiPrakashPhoto from '../assets/sai_prakash.png';
import dvpSridharPhoto from '../assets/dvp_sridhar.jpg';
import manjushaPhoto from '../assets/manjusha.jpg';
import jayalakshmiPhoto from '../assets/jayalakshmi.jpeg';

interface LeaderProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  objectPosition?: string;
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function LeaderCard({ name, role, bio, image, linkedin, email, objectPosition = 'center 15%' }: LeaderProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-platinum/50 text-center flex flex-col items-center">
      {/* Photo */}
      <div className="flex-shrink-0 w-40 h-40 mx-auto mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-royal-gold/30 group-hover:border-royal-gold transition-colors duration-300">
          {image ? (
            <img
              src={image}
              alt={name}
              style={{ objectPosition }}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-blue to-charcoal flex items-center justify-center">
              <span className="text-3xl font-playfair font-bold text-royal-gold">{getInitials(name)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="font-playfair text-xl font-bold text-primary-blue mb-1">
        {name}
      </h3>
      {role && (
        <p className="text-royal-gold font-medium text-sm mb-3">
          {role}
        </p>
      )}
      {bio && (
        <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs mx-auto mb-4">
          {bio}
        </p>
      )}

      {/* Social Links */}
      {(linkedin || email) && (
        <div className="flex items-center justify-center gap-3 mt-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-white text-primary-blue transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-white text-primary-blue transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const leaders: LeaderProps[] = [
  {
    name: "Sanjay Enishetty",
    role: "Chief Mentor & Advisor",
    bio: "",
    image: sanjayPhoto,
    linkedin: "https://www.linkedin.com/in/sanjayenishetty/",
    email: "sanjayenishetty@gmail.com",
    objectPosition: "center 15%"
  },
  {
    name: "Naresh Kuchi",
    role: "Managing Director",
    bio: "",
    image: nareshPhoto,
    linkedin: "https://www.linkedin.com/in/naresh-kuchi-5813691a5/",
    email: "nareshk@entrepreneurhub.in",
    objectPosition: "center 15%"
  },
  {
    name: "Sai Prakash",
    role: "Marketing Head",
    bio: "",
    image: saiPrakashPhoto,
    linkedin: "https://www.linkedin.com/in/saiprakashav/",
    email: "heh@entrepreneurhub.in",
    objectPosition: "center 15%"
  },
  {
    name: "DVP Sridhar",
    role: "Head - Operations",
    bio: "",
    image: dvpSridharPhoto,
    linkedin: "https://www.linkedin.com/in/sridhar-dadhirao-5b657624",
    objectPosition: "center 10%"
  },
  {
    name: "Manjusha M",
    role: "Head - Women's Win",
    bio: "",
    image: manjushaPhoto,
    linkedin: "https://www.linkedin.com/in/manjusha-973545103/",
    objectPosition: "center 20%"
  },
  {
    name: "Jaya Lakshmi",
    role: "Head - Membership Growth",
    bio: "",
    image: jayalakshmiPhoto,
    objectPosition: "center 10%"
  },
  // Placeholder 2 — replace name, role, image, linkedin, email when ready
  {
    name: "Coming Soon",
    role: "",
    bio: "",
    image: "",
  },
];

export default function CoreTeamPage() {
  return (
    <div className="min-h-screen bg-heh-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-royal-gold mb-4">
              Core Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Meet the leaders driving HEH's mission to empower Hyderabad's entrepreneurial community.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
              {leaders.map((leader, index) => (
                <LeaderCard key={index} {...leader} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
