import { Linkedin, Mail } from 'lucide-react';

interface LeaderProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function LeaderCard({ name, role, bio, image, linkedin, email }: LeaderProps) {
  return (
    <div className="group text-center">
      {/* Photo */}
      <div className="relative w-40 h-40 mx-auto mb-5">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-royal-gold/30 group-hover:border-royal-gold transition-colors duration-300">
          {image ? (
            <img
              src={image}
              alt={name}
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
      <div className="flex items-center justify-center gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-primary-blue/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-white text-primary-blue transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="w-9 h-9 bg-primary-blue/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-white text-primary-blue transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function LeadershipSection() {
  const leaders: LeaderProps[] = [
    {
      name: "Sanjay Enishetty",
      role: "Chief Mentor & Advisor",
      bio: "",
      image: "https://d2z9497xp8xb12.cloudfront.net/prod-images/503549c1766484122561044a36e1-62d0-4cde-82df-6dd7e342e0d1.png",
      linkedin: "https://www.linkedin.com/in/sanjayenishetty/",
      email: "heh@entrepreneurhub.in"
    },
    {
      name: "Naresh Kuchi",
      role: "Core Member",
      bio: "",
      image: "",
    },
    {
      name: "Sai Prakash",
      role: "Core Member",
      bio: "",
      image: "",
    },
    {
      name: "Sridhar DadhiRao",
      role: "Core Member",
      bio: "",
      image: "",
    },
  ];

  return (
    <section id="leadership-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
            Core Team
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Meet the leaders driving HEH's mission to empower Hyderabad's entrepreneurial community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
