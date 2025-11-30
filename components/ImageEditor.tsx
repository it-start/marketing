import React, { useState, useRef } from 'react';
import { Upload, Wand2, RefreshCw, AlertCircle, Download } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';
import { ImageEditState } from '../types';
import { useAppContext } from '../context';

const ImageEditor: React.FC = () => {
  const { t } = useAppContext();
  const [state, setState] = useState<ImageEditState>({
    originalImage: null,
    generatedImage: null,
    prompt: '',
    isLoading: false,
    error: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(prev => ({
          ...prev,
          originalImage: reader.result as string,
          generatedImage: null, // Reset generated on new upload
          error: null
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!state.originalImage) return;
    if (!state.prompt.trim()) {
      setState(prev => ({ ...prev, error: t('ai.error.empty') }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await editImageWithGemini(state.originalImage, state.prompt);
      setState(prev => ({
        ...prev,
        generatedImage: result,
        isLoading: false
      }));
    } catch (err: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: err.message || "Failed to generate image. Please try again."
      }));
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-1 pb-24">
      <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 transition-colors">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('ai.title')}</h2>
            <p className="text-sm text-slate-500 dark:text-gray-400">{t('ai.subtitle')}</p>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-gray-300 text-sm mb-6">
          {t('ai.desc')}
        </p>

        {/* Upload Section */}
        {!state.originalImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 dark:border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary dark:hover:border-primary transition-colors bg-slate-50 dark:bg-dark/50"
          >
            <Upload className="w-10 h-10 text-slate-400 dark:text-gray-400 mb-2" />
            <span className="text-slate-700 dark:text-gray-300 font-medium">{t('ai.upload')}</span>
            <span className="text-xs text-slate-500 dark:text-gray-500 mt-1">JPG, PNG up to 5MB</span>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-dark aspect-square md:aspect-video flex items-center justify-center border border-slate-200 dark:border-white/10 group">
              <img 
                src={state.generatedImage || state.originalImage} 
                alt="Preview" 
                className="w-full h-full object-contain"
              />
              {state.isLoading && (
                <div className="absolute inset-0 bg-white/70 dark:bg-black/70 flex items-center justify-center flex-col backdrop-blur-sm">
                  <RefreshCw className="w-8 h-8 text-primary animate-spin mb-2" />
                  <span className="text-sm font-medium animate-pulse text-slate-900 dark:text-white">{t('ai.processing')}</span>
                </div>
              )}
              {/* Reset Button */}
              <button 
                onClick={() => setState(prev => ({ ...prev, originalImage: null, generatedImage: null, prompt: '' }))}
                className="absolute top-2 right-2 bg-white/80 dark:bg-black/60 p-2 rounded-full hover:text-red-500 hover:bg-white dark:hover:bg-red-500/80 transition-colors shadow-sm"
                title="Remove Image"
              >
                <RefreshCw className="w-4 h-4 text-slate-700 dark:text-white" />
              </button>
            </div>

            {/* Controls */}
            <div className="flex flex-col space-y-3">
              <div className="relative">
                 <input
                  type="text"
                  value={state.prompt}
                  onChange={(e) => setState(prev => ({ ...prev, prompt: e.target.value }))}
                  placeholder={t('ai.placeholder')}
                  className="w-full bg-slate-100 dark:bg-dark/80 border border-slate-300 dark:border-gray-600 rounded-lg p-3 pr-12 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <button 
                  onClick={handleGenerate}
                  disabled={state.isLoading || !state.prompt.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  <Wand2 className="w-4 h-4" />
                </button>
              </div>

               {state.error && (
                <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-400/10 p-3 rounded-lg border border-red-200 dark:border-red-400/20">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{state.error}</span>
                </div>
              )}

              {state.generatedImage && (
                 <a 
                   href={state.generatedImage} 
                   download="gemini-edited.png"
                   className="flex items-center justify-center space-x-2 w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg transition-colors shadow-md"
                 >
                   <Download className="w-4 h-4" />
                   <span>{t('ai.download')}</span>
                 </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageEditor;