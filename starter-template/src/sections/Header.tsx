"use client";
import StarIcon from '@/assets/icons/star.svg';

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur relative overflow-hidden">
        {/* Decorative stars */}
        <StarIcon className="absolute size-3 text-emerald-300/20 top-1 left-2 animate-pulse" />
        <StarIcon className="absolute size-2 text-emerald-300/30 bottom-1 right-3 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <a href="#home" className="nav-item group">
          <span>Home</span>
        </a>
        <a href="#project" className="nav-item group">
          <span>Projects</span>
        </a>
        <a href="#about" className="nav-item group">
          <span>About</span>
        </a>
        <a 
          href="#contact" 
          className="nav-item bg-white text-gray-900 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-sky-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group"
        >
          <span>Contact</span>
        </a>
      </nav>
    </div>
  );
};
