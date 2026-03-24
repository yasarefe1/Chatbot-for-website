import React, { useState } from 'react';
import { Settings, Code, Copy, CheckCircle2, Github, Terminal, AlertTriangle } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [botName, setBotName] = useState('Destek Asistanı');
  const [systemPrompt, setSystemPrompt] = useState('Sen yardımsever, kibar ve çözüm odaklı bir müşteri temsilcisisin. Kısa ve öz cevaplar ver.');
  const [themeColor, setThemeColor] = useState('#0ea5e9'); // Default sky-500
  const [copied, setCopied] = useState(false);

  const colors = [
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Slate', value: '#64748b' },
    { name: 'Zinc', value: '#18181b' },
  ];

  const embedCode = `<!-- OpenChat Widget -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/openchat/widget.js"></script>
<script>
  OpenChat.init({
    apiKey: "${apiKey || 'YOUR_GEMINI_API_KEY'}",
    botName: "${botName}",
    themeColor: "${themeColor}",
    systemPrompt: "${systemPrompt.replace(/\n/g, ' ')}"
  });
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-200">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 text-white p-1.5 rounded-lg">
              <Terminal size={24} />
            </div>
            <h1 className="font-bold text-xl tracking-tight">OpenChat<span className="text-slate-400 font-normal">.js</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors">
              <Github size={20} />
              <span className="hidden sm:inline">GitHub'da Yıldızla</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        
        {/* Left Column: Configuration */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Widget Oluşturucu</h2>
            <p className="text-slate-500">Web siteniz için saniyeler içinde ücretsiz, yapay zeka destekli bir sohbet botu yapılandırın.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <Settings className="text-slate-400" size={20} />
              <h3 className="font-semibold text-lg">Yapılandırma</h3>
            </div>

            {/* API Key */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Gemini API Anahtarı
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
              <p className="text-xs text-slate-500 flex items-start gap-1.5 mt-1.5">
                <AlertTriangle size={14} className="shrink-0 text-amber-500" />
                <span>API anahtarınız sadece tarayıcınızda çalışır. Boş bırakırsanız demo için sistemin varsayılan anahtarı kullanılır.</span>
              </p>
            </div>

            {/* Bot Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Bot Adı
              </label>
              <input
                type="text"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Theme Color */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Tema Rengi
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setThemeColor(c.value)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      themeColor === c.value ? 'border-slate-900 scale-110 shadow-md' : 'border-transparent hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* System Prompt */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Sistem Komutu (Kişilik)
              </label>
              <textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                placeholder="Botun nasıl davranması gerektiğini anlatın..."
              />
            </div>
          </div>
        </div>

        {/* Right Column: Code & Instructions */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl text-slate-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white">
                <Code size={20} />
                <h3 className="font-semibold text-lg">Kurulum Kodu</h3>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {copied ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                {copied ? 'Kopyalandı!' : 'Kodu Kopyala'}
              </button>
            </div>
            
            <p className="text-sm text-slate-400 mb-4">
              Aşağıdaki kodu web sitenizin <code className="text-sky-400">&lt;head&gt;</code> veya <code className="text-sky-400">&lt;body&gt;</code> etiketleri arasına yapıştırın.
            </p>

            <div className="bg-black/50 rounded-xl p-4 overflow-x-auto border border-white/10">
              <pre className="text-sm font-mono text-slate-300">
                <code>{embedCode}</code>
              </pre>
            </div>

            <div className="mt-6 p-4 bg-sky-500/10 border border-sky-500/20 rounded-xl">
              <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                <AlertTriangle size={16} className="text-sky-400" />
                Güvenlik Notu
              </h4>
              <p className="text-sm leading-relaxed text-slate-400">
                Bu açık kaynaklı mimaride API anahtarı istemci tarafında (tarayıcıda) çalışır. Bu yöntemi sadece <strong>kendi kişisel projelerinizde, iç ağ (intranet) uygulamalarınızda veya API kotalarınızı sınırlandırdığınız</strong> durumlarda kullanmanız önerilir.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* The actual floating widget preview */}
      <ChatWidget 
        apiKey={apiKey}
        botName={botName}
        systemPrompt={systemPrompt}
        themeColor={themeColor}
      />
    </div>
  );
}

