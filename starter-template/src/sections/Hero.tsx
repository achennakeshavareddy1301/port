"use client";
import React, { useState } from 'react';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';
import StarIcon from '@/assets/icons/star.svg';

export const HeroSection: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-hidden">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {/* Like Button - Top Right */}
      <div className="absolute top-16 right-8 z-20">
        <button
          onClick={handleLike}
          className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-110 ${
            isLiked 
              ? 'bg-gradient-to-r from-pink-500 to-red-500 border-pink-400 text-white shadow-lg shadow-pink-500/25' 
              : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20 hover:border-emerald-300/50'
          }`}
        >
          <div className={`relative transition-all duration-300 ${isLiked ? 'scale-110' : 'group-hover:scale-110'}`}>
            {isLiked ? (
              <span className="text-lg animate-pulse">❤️</span>
            ) : (
              <span className="text-lg group-hover:text-emerald-300 transition-colors duration-300">🤍</span>
            )}
          </div>
          <span className={`text-sm font-semibold transition-all duration-300 ${
            isLiked ? 'text-white' : 'text-white/80 group-hover:text-emerald-300'
          }`}>
            {likeCount}
          </span>
          {isLiked && (
            <>
              <span className="absolute -top-2 -right-1 text-xs animate-bounce" style={{ animationDelay: '0ms' }}>💖</span>
              <span className="absolute -top-3 left-1 text-xs animate-bounce" style={{ animationDelay: '200ms' }}>✨</span>
              <span className="absolute -top-2 left-6 text-xs animate-bounce" style={{ animationDelay: '400ms' }}>💫</span>
            </>
          )}
        </button>
      </div>
      {/* Decorative rings and stars */}
      <div className="size-[620px] hero-ring">
        <StarIcon className="absolute size-6 text-emerald-300 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      <div className="size-[820px] hero-ring">
        <StarIcon className="absolute size-4 text-emerald-300 top-1/4 right-0 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        <StarIcon className="absolute size-5 text-emerald-300 bottom-1/3 left-0 -translate-x-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="size-[1020px] hero-ring">
        <StarIcon className="absolute size-6 text-emerald-300 top-0 right-1/4 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <StarIcon className="absolute size-4 text-emerald-300 bottom-0 left-1/4 translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="size-[1220px] hero-ring">
        <StarIcon className="absolute size-5 text-emerald-300 top-1/6 left-0 -translate-x-1/2 animate-pulse" style={{ animationDelay: '3s' }} />
        <StarIcon className="absolute size-4 text-emerald-300 right-0 top-1/4 translate-x-1/2 animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className='size-[100px] ' alt="memoji" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
          <div className='mt-4 text-center text-white/80 md:text-lg'>
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional Digital Experiences</h1>
            <p className='mt-4 text-center text-white/80'>
              I am a passionate web developer with a focus on creating exceptional digital experiences. My expertise lies in crafting user-friendly interfaces and robust back-end systems that drive engagement and deliver results.
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105'>
              <span className='font-semibold'>Explore My Work</span>
              <ArrowDown className='size-4'/>
            </button>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl bg-white text-gray-950 hover:bg-gray-100 hover:scale-105 transition-all duration-300'>
              <span>👋</span>
              {/* Fixed apostrophe using HTML entity */}
              <span className='font-semibold'>Let&apos;s connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
