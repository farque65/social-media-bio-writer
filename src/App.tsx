import React, { useState } from 'react';
import { Users, Twitter, Instagram, Youtube, Linkedin, Link as LinkIcon, Hash, Cloud } from 'lucide-react';

type Platform = 'twitter' | 'instagram' | 'youtube' | 'linkedin' | 'farcaster' | 'bluesky';

interface UserInfo {
  channelName: string;
  niche: string;
  links: string;
  additionalInfo: string;
}

function enhanceAdditionalInfo(info: string): string {
  // Split info into lines and add emojis if they don't exist
  return info
    .split('\n')
    .map(line => {
      if (!line.trim()) return line;
      if (!/^[^\w]*[🌟⭐️✨💫🎯🎨💻📱🎮🎓📚💡🔥🌈🚀]/.test(line)) {
        const emojis = ['🌟', '⭐️', '✨', '💫', '🎯', '🎨', '💻', '📱', '🎮', '🎓', '📚', '💡', '🔥', '🌈', '🚀'];
        return `${emojis[Math.floor(Math.random() * emojis.length)]} ${line}`;
      }
      return line;
    })
    .join('\n');
}

function formatBio(platform: Platform, info: UserInfo): string {
  const { channelName, niche, links, additionalInfo } = info;
  const enhancedInfo = enhanceAdditionalInfo(additionalInfo);
  
  switch (platform) {
    case 'twitter':
      return `${channelName} ✦ ${niche}\n\n${enhancedInfo}\n\n🔗 Let's connect:\n${links}`;
    case 'instagram':
      return `✨ ${channelName} ✨\n${niche.toUpperCase()} 🚀\n\n${enhancedInfo}\n\n📍 Links & Socials\n👇\n${links}`;
    case 'youtube':
      return `🎥 ${channelName}\n${niche} | Content Creator\n\n${enhancedInfo}\n\n🎯 Subscribe for more content!\n📍 Links & Social Media:\n${links}`;
    case 'linkedin':
      return `${channelName}\n${niche} | Content Creator & Industry Professional\n\n📌 About Me:\n${enhancedInfo}\n\n🤝 Let's Connect:\n${links}`;
    case 'farcaster':
      return `⚡️ ${channelName}\n${niche}\n\n${enhancedInfo}\n\n🔗 Connect & Follow:\n${links}`;
    case 'bluesky':
      return `✦ ${channelName} ✦\n${niche}\n\n${enhancedInfo}\n\n🌐 Find me here:\n${links}`;
    default:
      return '';
  }
}

function generatePlaceholder(platform: Platform): string {
  switch (platform) {
    case 'twitter':
      return '🎓 5+ years in tech\n💻 Building in public\n🚀 Sharing daily insights';
    case 'instagram':
      return '📸 Daily tech tips\n💫 Tutorial creator\n🎯 Helping devs grow';
    case 'youtube':
      return '🎥 Weekly coding tutorials\n💡 Tech tips & tricks\n🌟 Community projects';
    case 'linkedin':
      return 'Leading tech initiatives\nMentoring developers\nBuilding innovative solutions';
    case 'farcaster':
      return '⚡️ Web3 enthusiast\n🔮 Building the future\n🌟 Daily tech insights';
    case 'bluesky':
      return '✨ Tech explorer\n🚀 Building in public\n💫 Sharing knowledge';
    default:
      return '';
  }
}

function App() {
  const [activeTab, setActiveTab] = useState<Platform>('twitter');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    channelName: '',
    niche: '',
    links: '',
    additionalInfo: '',
  });

  const tabs: { id: Platform; label: string; icon: React.ReactNode }[] = [
    { id: 'twitter', label: 'Twitter', icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'instagram', label: 'Instagram', icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'youtube', label: 'YouTube', icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'farcaster', label: 'Farcaster', icon: <Hash className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'bluesky', label: 'Bluesky', icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-3 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Social Media Bio Writer</h1>
          <p className="text-sm sm:text-base text-gray-600">Create the perfect bio for every platform</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Users className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Your Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Channel/Profile Name
                </label>
                <input
                  type="text"
                  name="channelName"
                  value={userInfo.channelName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="e.g., Tech with Sarah"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Niche
                </label>
                <input
                  type="text"
                  name="niche"
                  value={userInfo.niche}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="e.g., Web Development | UI/UX Design"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Links
                </label>
                <textarea
                  name="links"
                  value={userInfo.links}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  rows={2}
                  placeholder="e.g., linktr.ee/techsarah"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={userInfo.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  rows={3}
                  placeholder={generatePlaceholder(activeTab)}
                />
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <LinkIcon className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Generated Bio</h2>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-1 border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-xs sm:text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 min-h-[200px]">
              <pre className="whitespace-pre-wrap font-sans text-gray-800 text-sm sm:text-base">
                {formatBio(activeTab, userInfo)}
              </pre>
            </div>

            <button
              onClick={() => navigator.clipboard.writeText(formatBio(activeTab, userInfo))}
              className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <LinkIcon className="w-4 h-4" />
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;