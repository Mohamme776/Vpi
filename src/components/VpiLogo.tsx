import React from 'react';

interface VpiLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const VpiLogo: React.FC<VpiLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light' || variant === 'header';

  const sizeClasses = {
    sm: 'h-10',
    md: 'h-13 sm:h-16',
    lg: 'h-20 sm:h-24',
  }[size];

  return (
    <div
      id="vpi-brand-logo"
      className={`inline-flex items-center gap-3 select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      title="شركة أجزاء المركبة للصناعة | Vehicle Parts Industry Co. (VPI)"
    >
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses}`}>
        {/* Exact vector recreation of the VPI emblem from the screenshot */}
        <svg
          viewBox="0 0 280 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto max-w-[240px] drop-shadow-md"
        >
          {/* Outer aerodynamic stylized car silhouette loop */}
          <path
            d="M 28 85 C 45 85, 52 82, 64 62 C 85 24, 130 14, 185 16 C 228 18, 252 40, 268 76 C 255 77, 245 78, 235 78 C 220 78, 214 74, 204 55 C 190 28, 160 22, 126 22 C 88 22, 58 42, 45 75 C 38 82, 33 85, 28 85 Z"
            fill={isLight ? '#ffffff' : '#0f2b48'}
            opacity="0.95"
          />

          {/* Dynamic accent sweep under the roofline */}
          <path
            d="M 70 65 C 95 38, 140 28, 195 30 C 225 31, 242 46, 254 70 C 242 71, 230 71, 218 68 C 205 48, 178 38, 140 38 C 100 38, 78 52, 70 65 Z"
            fill="#8bc34a"
            opacity="0.85"
          />

          {/* Front wheel arch cutout indicator */}
          <circle cx="218" cy="80" r="14" stroke={isLight ? '#ffffff' : '#0f2b48'} strokeWidth="3.5" fill="none" />
          <circle cx="218" cy="80" r="5" fill="#8bc34a" />

          {/* Rear wheel arch cutout indicator */}
          <circle cx="58" cy="80" r="14" stroke={isLight ? '#ffffff' : '#0f2b48'} strokeWidth="3.5" fill="none" />
          <circle cx="58" cy="80" r="5" fill="#8bc34a" />

          {/* VPI Bold Stylized Monogram */}
          <g transform="translate(85, 48)">
            {/* Letter V */}
            <path
              d="M 0 0 L 14 36 L 28 0 L 21 0 L 14 25 L 7 0 Z"
              fill={isLight ? '#ffffff' : '#0f2b48'}
              stroke={isLight ? '#ffffff' : '#0f2b48'}
              strokeWidth="1.2"
            />
            {/* Letter P */}
            <path
              d="M 33 0 L 33 36 L 40 36 L 40 22 L 54 22 C 63 22, 69 17, 69 11 C 69 5, 63 0, 54 0 Z M 40 6 L 52 6 C 58 6, 62 8, 62 11 C 62 14, 58 16, 52 16 L 40 16 Z"
              fill={isLight ? '#ffffff' : '#0f2b48'}
              stroke={isLight ? '#ffffff' : '#0f2b48'}
              strokeWidth="1.2"
            />
            {/* Letter I */}
            <path
              d="M 75 0 L 75 36 L 82 36 L 82 0 Z"
              fill={isLight ? '#ffffff' : '#0f2b48'}
              stroke={isLight ? '#ffffff' : '#0f2b48'}
              strokeWidth="1.2"
            />
            {/* Green dot on the I or dynamic speed streak */}
            <circle cx="78.5" cy="-5" r="3.5" fill="#8bc34a" />
          </g>

          {/* Arabic Company Name */}
          <text
            x="140"
            y="98"
            textAnchor="middle"
            fontFamily="'Cairo', sans-serif"
            fontWeight="700"
            fontSize="12"
            fill={isLight ? '#ffffff' : '#0f2b48'}
            letterSpacing="0.3"
          >
            شركة أجزاء المركبة للصناعة
          </text>

          {/* English Company Name */}
          <text
            x="140"
            y="112"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="600"
            fontSize="8.5"
            fill={isLight ? 'rgba(255,255,255,0.85)' : '#4b6584'}
            letterSpacing="0.8"
          >
            Vehicle Parts Industry Co.
          </text>
        </svg>
      </div>

      {showSubtitle && (
        <div className="hidden lg:flex flex-col border-r border-white/20 pr-3 text-right">
          <span className={`text-xs font-bold leading-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
            صناعة سعودية معتمدة
          </span>
          <span className="text-[10px] text-lime-400 font-medium">
            المدينة الصناعية، الخرج
          </span>
        </div>
      )}
    </div>
  );
};
