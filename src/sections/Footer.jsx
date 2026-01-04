import React from "react";

const socialLinks = [
  {
    id: 1,
    name: "Github",
    iconPath: "/assets/socials/github.svg",
    link: "https://github.com/paawansaxna",
  },
  {
    id: 2,
    name: "Instagram",
    iconPath: "/assets/socials/instagram.svg",
    link: "https://www.instagram.com/elvte.pxxwan/",
  },
  {
    id: 3,
    name: "LinkedIn",
    iconPath: "/assets/socials/linkedIn.svg",
    link: "https://www.linkedin.com/in/paawansaxena/",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-12">
      <div className="c-space">
        {/* TOP SECTION: Branding & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Let&apos;s build something together.
            </h2>
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Open for new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          
        </div>

        {/* BOTTOM SECTION: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-neutral-900">
          {/* Left: Copyright */}
          <p className="text-neutral-500 text-sm tracking-tight order-2 md:order-1">
            © {currentYear} <br />Paawan Saxena. All rights reserved.
          </p>
          
          {/* Right: Social Links (Follow Me Section) */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            <span className="hidden sm:block text-purple-500 text-xs font-bold uppercase tracking-[0.2em]">
              Follow Me
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-purple-500/50 hover:bg-neutral-900 transition-all duration-300 group"
                >
                  <img 
                    src={social.iconPath} 
                    alt={social.name} 
                    className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};