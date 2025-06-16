export const theme = {
  colors: {
    primary: '#3F3D56',        // Deep Indigo
    accent: '#3ABEFF',         // Electric Blue
    secondary: '#E5E7EB',      // Cool Gray
    highlight: '#A78BFA',      // Soft Neon Violet
    background: '#F8FAFC',     // Light Slate
  },
  gradients: {
    primary: 'linear-gradient(135deg, #3F3D56 0%, #4C5BC7 100%)',
    accent: 'linear-gradient(135deg, #3ABEFF 0%, #A78BFA 100%)',
    hero: 'linear-gradient(135deg, #3F3D56 0%, #2563EB 100%)',
  },
  fonts: {
    sans: ['Inter', 'sans-serif'],
  },
  animations: {
    fadeIn: 'fadeIn 0.6s ease-out',
    slideUp: 'slideUp 0.6s ease-out',
  },
};

export type Theme = typeof theme;
