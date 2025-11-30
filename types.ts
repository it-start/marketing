export enum AppSection {
  HOME = 'HOME',
  EXPERTISE = 'EXPERTISE',
  AI_STUDIO = 'AI_STUDIO',
  PRICING = 'PRICING',
  CONTACT = 'CONTACT'
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ImageEditState {
  originalImage: string | null; // Base64
  generatedImage: string | null; // Base64
  prompt: string;
  isLoading: boolean;
  error: string | null;
}