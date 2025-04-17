import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { X, Check, Pipette } from 'lucide-react';

interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

interface ColorThemeSelectorProps {
  theme: ColorTheme;
  onChange: (theme: ColorTheme) => void;
  onClose: () => void;
}

const presetColors = [
  '#94a3b8',  // Slate
  '#6d28d9',  // Purple
  '#0ea5e9',  // Sky
  '#10b981',  // Emerald
  '#f59e0b',  // Amber
  '#ef4444',  // Red
  '#ec4899',  // Pink
  '#000000',  // Black
  '#ffffff',  // White
];

export function ColorThemeSelector({ theme, onChange, onClose }: ColorThemeSelectorProps) {
  const [activeColor, setActiveColor] = React.useState<keyof ColorTheme>('primary');
  const [isPickerActive, setIsPickerActive] = React.useState(false);

  const handleColorChange = (color: string) => {
    onChange({ ...theme, [activeColor]: color });
  };

  const handleEyeDropper = async () => {
    try {
      setIsPickerActive(true);
      // @ts-ignore - EyeDropper API is not yet in TypeScript types
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      handleColorChange(result.sRGBHex);
    } catch (e) {
      console.log('User canceled the picker');
    } finally {
      setIsPickerActive(false);
    }
  };

  return (
    <div className="fixed top-24 right-6 z-50 bg-zinc-900 p-6 rounded-xl shadow-xl border border-white/10 w-72">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-white">Color Theme</h3>
        <button 
          onClick={onClose}
          className="text-white/60 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-8">
        {/* Color Type Selection */}
        <div className="grid grid-cols-2 gap-2">
          {(['primary', 'secondary', 'accent', 'background'] as const).map((colorType) => (
            <button
              key={colorType}
              onClick={() => setActiveColor(colorType)}
              className={`flex items-center gap-2 p-2 rounded ${
                activeColor === colorType 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <div 
                className="w-4 h-4 rounded-full border border-white/10" 
                style={{ backgroundColor: theme[colorType] }}
              />
              <span className="text-sm capitalize">{colorType}</span>
              {activeColor === colorType && (
                <Check className="w-4 h-4 ml-auto" />
              )}
            </button>
          ))}
        </div>

        {/* Color Picker Tools */}
        <div className="space-y-4">
          {/* Eye Dropper Button */}
          <button
            onClick={handleEyeDropper}
            disabled={isPickerActive}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition-colors ${
              isPickerActive ? 'bg-white/20' : ''
            }`}
          >
            <Pipette className="w-4 h-4" />
            <span>{isPickerActive ? 'Pick a color...' : 'Pick color from screen'}</span>
          </button>

          {/* Color Picker */}
          <HexColorPicker
            color={theme[activeColor]}
            onChange={handleColorChange}
            className="w-full"
          />
        </div>

        {/* Preset Colors */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">
            Preset Colors
          </label>
          <div className="grid grid-cols-5 gap-2">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={`w-full aspect-square rounded-lg border-2 transition-all ${
                  theme[activeColor] === color 
                    ? 'border-white scale-110' 
                    : 'border-transparent hover:border-white/30'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Theme Presets */}
        <div className="pt-4 border-t border-white/10">
          <label className="block text-sm font-medium text-white/80 mb-3">
            Theme Presets
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onChange({
                primary: '#94a3b8',    // Calm slate blue
                secondary: '#0f172a',  // Dark slate for text
                accent: '#64748b',     // Medium slate
                background: '#ffffff'  // Pure white background
              })}
              className="px-4 py-2 rounded-lg bg-slate-400 text-white text-sm hover:bg-slate-500 transition-colors"
            >
              Calm Theme
            </button>
            <button
              onClick={() => onChange({
                primary: '#6d28d9',
                secondary: '#ffffff',
                accent: '#9333ea',
                background: '#000000'
              })}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm hover:bg-purple-700 transition-colors"
            >
              Dark Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}