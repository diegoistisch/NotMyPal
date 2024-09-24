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
      console.error('Fehler beim Verarbeiten der Datei:', error);
      alert('Es gab einen Fehler beim Verarbeiten der Datei. Bitte überprüfen Sie das Konsolenprotokoll für Details.');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col">
      <nav className="bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-extrabold text-2xl text-white tracking-wider">
                Not<span className="text-yellow-300">My</span>Pal
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative w-full max-w-md">
          <div className="bg-white bg-opacity-90 shadow-lg rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-tight">
              Instagram Follower Vergleich
            </h2>
            <div {...getRootProps()} className="mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-gray-400 transition-colors bg-white bg-opacity-50">
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p className="text-gray-600 font-medium">Lassen Sie die Datei hier los ...</p> :
                  <p className="text-gray-600 font-medium">Ziehen Sie die ZIP-Datei hierher oder klicken Sie, um eine Datei auszuwählen</p>
              }
            </div>
            {notFollowingBack.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Benutzer, denen Sie folgen, die Ihnen aber nicht folgen:
                </h3>
                <ul className="bg-white bg-opacity-50 rounded-lg p-4 max-h-60 overflow-y-auto">
                  {notFollowingBack.map((username, index) => (
                    <li key={index} className="mb-2 last:mb-0 text-gray-700 font-medium">{username}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
