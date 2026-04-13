import React, { useState, useEffect } from 'react';
import { getContent, updateContent } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Save, LogOut, ChevronRight, Home, Layout, List, MapPin, 
  Sparkles, User, RefreshCcw, HelpCircle, Loader2, Plus, Trash2 
} from 'lucide-react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';

const AdminDashboard = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await getContent();
      if (data.success) {
        setContent(data.content);
      }
    } catch (error) {
      toast.error('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (path, value) => {
    const newContent = { ...content };
    const keys = path.split('.');
    let current = newContent;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setContent(newContent);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const data = await updateContent(content);
      if (data.success) {
        toast.success('Changes saved successfully!');
      }
    } catch (error) {
      toast.error('Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const addItem = (section, template) => {
    const newContent = { ...content };
    newContent[section].items = [...newContent[section].items, template];
    setContent(newContent);
  };

  const removeItem = (section, index) => {
    const newContent = { ...content };
    newContent[section].items = newContent[section].items.filter((_, i) => i !== index);
    setContent(newContent);
  };

  if (loading) return <LoadingSpinner />;

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: Sparkles },
    { id: 'overview', label: 'Overview', icon: Layout },
    { id: 'connectivity', label: 'Connectivity', icon: MapPin },
    { id: 'amenities', label: 'Amenities', icon: List },
    { id: 'about', label: 'About Us', icon: User },
    { id: 'updates', label: 'Updates', icon: RefreshCcw },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 sticky top-0 h-screen flex flex-col pt-8">
        <div className="px-8 flex items-center gap-3 text-blue-600 font-bold text-2xl mb-12">
          <Home className="w-8 h-8" />
          <span>LuxeVilla Admin</span>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 border-transparent' 
                    : 'text-slate-500 hover:bg-slate-50 border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </div>
                {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 capitalize tracking-tight">{activeTab} Section</h1>
            <p className="text-slate-500 mt-2 font-medium">Update existing content and manage how visitors see your site</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-200 flex items-center gap-3 disabled:opacity-70"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Save Changes
          </button>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-10">
          
          {/* Hero Editor */}
          {activeTab === 'hero' && (
            <div className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700">Badge Text</label>
                    <input 
                      type="text"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      value={content.hero.badge}
                      onChange={(e) => handleUpdate('hero.badge', e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700">CTA Button Text</label>
                    <input 
                      type="text"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      value={content.hero.ctaText}
                      onChange={(e) => handleUpdate('hero.ctaText', e.target.value)}
                    />
                  </div>
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Main Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold text-xl"
                    value={content.hero.title}
                    onChange={(e) => handleUpdate('hero.title', e.target.value)}
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Subtitle</label>
                  <textarea 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium min-h-[120px]"
                    value={content.hero.subtitle}
                    onChange={(e) => handleUpdate('hero.subtitle', e.target.value)}
                  />
               </div>
            </div>
          )}

          {/* Overview Editor */}
          {activeTab === 'overview' && (
             <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Section Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                    value={content.overview.title}
                    onChange={(e) => handleUpdate('overview.title', e.target.value)}
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Description</label>
                  <textarea 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium min-h-[120px]"
                    value={content.overview.description}
                    onChange={(e) => handleUpdate('overview.description', e.target.value)}
                  />
               </div>
               <div className="pt-6 border-t border-slate-100">
                  <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    Highlights Grid
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.overview.highlights.map((h, i) => (
                       <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                            <span>Card {i+1}</span>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Label</label>
                            <input 
                              type="text"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm"
                              value={h.label}
                              onChange={(e) => {
                                const newHs = [...content.overview.highlights];
                                newHs[i].label = e.target.value;
                                handleUpdate('overview.highlights', newHs);
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Value</label>
                            <input 
                              type="text"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm font-bold"
                              value={h.value}
                              onChange={(e) => {
                                const newHs = [...content.overview.highlights];
                                newHs[i].value = e.target.value;
                                handleUpdate('overview.highlights', newHs);
                              }}
                            />
                          </div>
                       </div>
                    ))}
                  </div>
               </div>
             </div>
          )}

          {/* Connectivity Editor */}
          {activeTab === 'connectivity' && (
            <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Section Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                    value={content.connectivity.title}
                    onChange={(e) => handleUpdate('connectivity.title', e.target.value)}
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Description</label>
                  <textarea 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                    value={content.connectivity.description}
                    onChange={(e) => handleUpdate('connectivity.description', e.target.value)}
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.connectivity.items.map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 relative group">
                      <button 
                        onClick={() => removeItem('connectivity', i)}
                        className="absolute top-2 right-2 p-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <input 
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold"
                        value={item.label}
                        onChange={(e) => {
                          const items = [...content.connectivity.items];
                          items[i].label = e.target.value;
                          handleUpdate('connectivity.items', items);
                        }}
                        placeholder="Label (e.g. Metro Station)"
                      />
                      <input 
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs"
                        value={item.distance}
                        onChange={(e) => {
                          const items = [...content.connectivity.items];
                          items[i].distance = e.target.value;
                          handleUpdate('connectivity.items', items);
                        }}
                        placeholder="Distance (e.g. 0.5 km)"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => addItem('connectivity', { icon: 'map-pin', label: 'New Place', distance: '1 km' })}
                    className="p-6 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    Add Location
                  </button>
               </div>
            </div>
          )}

          {/* Amenities Editor */}
          {activeTab === 'amenities' && (
            <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Section Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                    value={content.amenities.title}
                    onChange={(e) => handleUpdate('amenities.title', e.target.value)}
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Description</label>
                  <textarea 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                    value={content.amenities.description}
                    onChange={(e) => handleUpdate('amenities.description', e.target.value)}
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.amenities.items.map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 relative group">
                      <button 
                        onClick={() => removeItem('amenities', i)}
                        className="absolute top-2 right-2 p-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <input 
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold"
                        value={item.name}
                        onChange={(e) => {
                          const items = [...content.amenities.items];
                          items[i].name = e.target.value;
                          handleUpdate('amenities.items', items);
                        }}
                        placeholder="Amenity Name"
                      />
                      <textarea 
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs h-20"
                        value={item.description}
                        onChange={(e) => {
                          const items = [...content.amenities.items];
                          items[i].description = e.target.value;
                          handleUpdate('amenities.items', items);
                        }}
                        placeholder="Short Description"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => addItem('amenities', { icon: 'shield', name: 'New Amenity', description: 'Describe the feature' })}
                    className="p-6 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all h-[155px]"
                  >
                    <Plus className="w-5 h-5" />
                    Add Amenity
                  </button>
               </div>
            </div>
          )}

          {/* About Editor */}
          {activeTab === 'about' && (
            <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Section Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                    value={content.about.title}
                    onChange={(e) => handleUpdate('about.title', e.target.value)}
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">About Description</label>
                  <textarea 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium h-40"
                    value={content.about.description}
                    onChange={(e) => handleUpdate('about.description', e.target.value)}
                  />
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {content.about.stats.map((stat, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                       <label className="text-[10px] uppercase font-bold text-slate-400">Stat {i+1}</label>
                       <input 
                         className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold"
                         value={stat.value}
                         onChange={(e) => {
                           const stats = [...content.about.stats];
                           stats[i].value = e.target.value;
                           handleUpdate('about.stats', stats);
                         }}
                         placeholder="Value (e.g. 25+)"
                       />
                       <input 
                         className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs"
                         value={stat.label}
                         onChange={(e) => {
                           const stats = [...content.about.stats];
                           stats[i].label = e.target.value;
                           handleUpdate('about.stats', stats);
                         }}
                         placeholder="Label"
                       />
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* Updates Editor */}
          {activeTab === 'updates' && (
            <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Section Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                    value={content.updates.title}
                    onChange={(e) => handleUpdate('updates.title', e.target.value)}
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Updates Header Description</label>
                  <textarea 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                    value={content.updates.description}
                    onChange={(e) => handleUpdate('updates.description', e.target.value)}
                  />
               </div>
               <div className="space-y-4">
                  {content.updates.items.map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 relative group">
                       <button 
                        onClick={() => removeItem('updates', i)}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all font-bold flex items-center gap-1 text-xs"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <input 
                            className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold"
                            value={item.title}
                            onChange={(e) => {
                              const items = [...content.updates.items];
                              items[i].title = e.target.value;
                              handleUpdate('updates.items', items);
                            }}
                            placeholder="Update Title"
                          />
                          <input 
                            className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm"
                            value={item.date}
                            onChange={(e) => {
                              const items = [...content.updates.items];
                              items[i].date = e.target.value;
                              handleUpdate('updates.items', items);
                            }}
                            placeholder="Date"
                          />
                          <input 
                            className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm"
                            value={item.phase}
                            onChange={(e) => {
                              const items = [...content.updates.items];
                              items[i].phase = e.target.value;
                              handleUpdate('updates.phase', items);
                            }}
                            placeholder="Phase"
                          />
                       </div>
                       <textarea 
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs h-20"
                        value={item.description}
                        onChange={(e) => {
                          const items = [...content.updates.items];
                          items[i].description = e.target.value;
                          handleUpdate('updates.items', items);
                        }}
                        placeholder="Description of progress"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => addItem('updates', { date: 'April 2024', title: 'New milestone', description: 'Briefly describe the progress', phase: 'Phase 1' })}
                    className="w-full p-6 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    Add Update
                  </button>
               </div>
            </div>
          )}

          {/* FAQ Editor */}
          {activeTab === 'faq' && (
            <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Section Title</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                    value={content.faq.title}
                    onChange={(e) => handleUpdate('faq.title', e.target.value)}
                  />
               </div>
               <div className="space-y-4">
                  {content.faq.items.map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 relative group">
                       <button 
                        onClick={() => removeItem('faq', i)}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                       <input 
                         className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold pr-12"
                         value={item.question}
                         onChange={(e) => {
                           const items = [...content.faq.items];
                           items[i].question = e.target.value;
                           handleUpdate('faq.items', items);
                         }}
                         placeholder="Question"
                       />
                       <textarea 
                         className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs h-24"
                         value={item.answer}
                         onChange={(e) => {
                           const items = [...content.faq.items];
                           items[i].answer = e.target.value;
                           handleUpdate('faq.items', items);
                         }}
                         placeholder="Answer"
                       />
                    </div>
                  ))}
                  <button 
                    onClick={() => addItem('faq', { question: 'New Question', answer: 'Provide the answer here' })}
                    className="w-full p-6 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    Add FAQ Item
                  </button>
               </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
