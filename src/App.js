import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';

function App() {
  const [notFollowingBack, setNotFollowingBack] = useState([]);

  const processFile = async (file) => {
    try {
      const zip = await JSZip.loadAsync(file);
      
      const followersData = JSON.parse(await zip.file('connections/followers_and_following/followers_1.json').async('text'));
      const followingData = JSON.parse(await zip.file('connections/followers_and_following/following.json').async('text'));
      
      const followers = Array.isArray(followersData) 
        ? followersData.map(entry => entry.string_list_data[0].value)
        : Object.values(followersData).flatMap(arr => arr.map(entry => entry.string_list_data[0].value));
      
      const following = Array.isArray(followingData)
        ? followingData.map(entry => entry.string_list_data[0].value)
        : Object.values(followingData).flatMap(arr => arr.map(entry => entry.string_list_data[0].value));
      
      const notFollowingBack = following.filter(user => !followers.includes(user));
      
      setNotFollowingBack(notFollowingBack);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('There was an error processing the file. Please check the console for details.');
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: '.zip',
    multiple: false 
  });

  const handleDownloadClick = () => {
    window.open('https://accountscenter.instagram.com/info_and_permissions/dyi/?theme=dark', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col">
      <nav className="bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <div className="flex items-center">
              <span className="font-extrabold text-2xl text-white tracking-wider">
                Not<span className="text-yellow-300">My</span>Pal
              </span>
            </div>
            <div className="flex items-center relative z-50">
              <button 
                onClick={handleDownloadClick}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-30 cursor-pointer relative z-50 text-sm sm:text-base"
                style={{ pointerEvents: 'auto' }}
              >
                <span className="hidden sm:inline">📥 Download Instagram Data</span>
                <span className="sm:hidden">📥 Download Data</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/50 shadow-2xl rounded-3xl p-6 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full -mr-10 -mt-10 blur-sm"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full -ml-8 -mb-8 blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-md"></div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-bold text-gray-800 mb-2 font-sans">
                      🔒 Privacy & Security
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 shadow-sm"></div>
                        <span>No data is stored</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 shadow-sm"></div>
                        <span>100% local processing</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 shadow-sm"></div>
                        <span>Your data never leaves your device</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-blue-200/50">
                      <p className="text-xs text-blue-600 font-semibold">
                        💡 All calculations happen directly in your browser
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full max-w-md">
              <div className="bg-white/95 shadow-2xl rounded-3xl p-8 sm:p-12 backdrop-blur-md border border-white/20">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Instagram Follower Comparison
                </h2>
                
                <div {...getRootProps()} className="mb-8 p-8 border-2 border-dashed border-gray-300/50 rounded-2xl text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50/50 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p className="text-gray-600 font-medium">Drop the file here...</p> :
                      <p className="text-gray-600 font-medium">Drag the ZIP file here or click to select a file</p>
                  }
                </div>
                {notFollowingBack.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Users you follow who don't follow you back:
                    </h3>
                    <ul className="bg-white/70 rounded-2xl p-6 max-h-60 overflow-y-auto backdrop-blur-sm border border-white/20">
                      {notFollowingBack.map((username, index) => (
                        <li key={index} className="mb-3 last:mb-0">
                          <a 
                            href={`https://www.instagram.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-all duration-200 flex items-center p-2 rounded-lg hover:bg-blue-50/50"
                          >
                            <span>@{username}</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md lg:max-w-sm">
            <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border border-orange-200/50 shadow-2xl rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-full -mr-12 -mt-12 blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-400/15 to-orange-500/15 rounded-full -ml-10 -mb-10 blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-amber-400/8 to-yellow-500/8 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl mr-4 transform hover:scale-105 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent font-sans">
                    📋 Step-by-Step Guide
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">1</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">Click "Download Instagram Data"</span>
                      <span className="text-gray-500 text-xs block mt-1 font-medium">(top right button)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">2</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">On Instagram:</span>
                      <span className="text-gray-500 text-xs block mt-1 font-medium">"Download or transfer your information"</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">3</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">Select "Some of your information"</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">4</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">Check "Followers and following"</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">5</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">Click "Download to device"</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">6</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">Select settings:</span>
                      <span className="text-gray-500 text-xs block mt-1 font-medium">Time period: All, Format: JSON</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-200">7</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-800">Click "Create files"</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-orange-200/50 bg-gradient-to-r from-orange-50/80 to-amber-50/80 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-orange-700 font-semibold">
                      You'll receive an email when your data is ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
