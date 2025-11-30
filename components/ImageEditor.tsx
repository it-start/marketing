import React, { useState, useRef } from 'react';
import { Upload, Wand2, RefreshCw, AlertCircle, Download, ImageIcon } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';
import { ImageEditState } from '../types';

const ImageEditor: React.FC = () => {
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
      setState(prev => ({ ...prev, error: "Please enter a description for the edit." }));
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
      <div className="bg-card p-6 rounded-2xl shadow-lg border border-white/5">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AI Creative Studio</h2>
            <p className="text-sm text-gray-400">Powered by Gemini 2.5 Flash</p>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-6">
          Showcase the power of AI in marketing. Upload an image and describe how you want to change it (e.g., "Add a neon sign", "Make it cyberpunk style").
        </p>

        {/* Upload Section */}
        {!state.originalImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors bg-dark/50"
          >
            <Upload className="w-10 h-10 text-gray-400 mb-2" />
            <span className="text-gray-300 font-medium">Upload Image</span>
            <span className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</span>
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
            <div className="relative rounded-xl overflow-hidden bg-dark aspect-square md:aspect-video flex items-center justify-center border border-white/10 group">
              <img 
                src={state.generatedImage || state.originalImage} 
                alt="Preview" 
                className="w-full h-full object-contain"
              />
              {state.isLoading && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col">
                  <RefreshCw className="w-8 h-8 text-primary animate-spin mb-2" />
                  <span className="text-sm font-medium animate-pulse">Processing with Gemini...</span>
                </div>
              )}
              {/* Reset Button */}
              <button 
                onClick={() => setState(prev => ({ ...prev, originalImage: null, generatedImage: null, prompt: '' }))}
                className="absolute top-2 right-2 bg-black/60 p-2 rounded-full hover:bg-red-500/80 transition-colors"
                title="Remove Image"
              >
                <RefreshCw className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Controls */}
            <div className="flex flex-col space-y-3">
              <div className="relative">
                 <input
                  type="text"
                  value={state.prompt}
                  onChange={(e) => setState(prev => ({ ...prev, prompt: e.target.value }))}
                  placeholder="E.g., Add a futuristic background..."
                  className="w-full bg-dark/80 border border-gray-600 rounded-lg p-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
                <div className="flex items-center space-x-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{state.error}</span>
                </div>
              )}

              {state.generatedImage && (
                 <a 
                   href={state.generatedImage} 
                   download="gemini-edited.png"
                   className="flex items-center justify-center space-x-2 w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg transition-colors"
                 >
                   <Download className="w-4 h-4" />
                   <span>Download Result</span>
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