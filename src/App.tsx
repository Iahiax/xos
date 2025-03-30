import React from 'react';
import { AppWindow as Windows, Link as Linux, Apple, Download, ExternalLink } from 'lucide-react';

interface OperatingSystem {
  name: string;
  icon: React.ElementType;
  versions: {
    name: string;
    downloadUrl: string;
    size: string;
  }[];
}

function App() {
  const operatingSystems: OperatingSystem[] = [
    {
      name: 'ويندوز',
      icon: Windows,
      versions: [
        {
          name: 'ويندوز 11',
          downloadUrl: 'https://www.microsoft.com/software-download/windows11',
          size: '5.1 GB'
        },
        {
          name: 'ويندوز 10',
          downloadUrl: 'https://www.microsoft.com/software-download/windows10',
          size: '4.8 GB'
        }
      ]
    },
    {
      name: 'لينكس',
      icon: Linux,
      versions: [
        {
          name: 'أوبونتو',
          downloadUrl: 'https://ubuntu.com/download/desktop',
          size: '3.5 GB'
        },
        {
          name: 'فيدورا',
          downloadUrl: 'https://fedoraproject.org/workstation/download',
          size: '2.8 GB'
        }
      ]
    },
    {
      name: 'ماك',
      icon: Apple,
      versions: [
        {
          name: 'ماك سونوما',
          downloadUrl: 'https://apps.apple.com/us/app/macos-sonoma/id6450717509',
          size: '12.5 GB'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">مركز تحميل أنظمة التشغيل</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operatingSystems.map((os) => (
            <div key={os.name} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <os.icon className="w-8 h-8" />
                <h2 className="text-2xl font-semibold">{os.name}</h2>
              </div>
              
              <div className="space-y-4">
                {os.versions.map((version) => (
                  <div key={version.name} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-xl mb-2">{version.name}</h3>
                    <p className="text-gray-400 mb-3">حجم الملف: {version.size}</p>
                    
                    <div className="flex gap-2">
                      <a
                        href={version.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        تحميل
                      </a>
                      
                      <a
                        href={version.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        الموقع الرسمي
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 text-gray-400">
          <p>جميع روابط التحميل رسمية ومباشرة من المواقع الأصلية</p>
        </footer>
      </div>
    </div>
  );
}

export default App;