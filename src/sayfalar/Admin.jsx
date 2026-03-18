import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Form alanları
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Kullanıcı giriş yapmış mı kontrol et
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Giriş başarısız: " + error.message);
    }
  };

  const handleAddVideo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), {
        title: title,
        videoUrl: videoUrl,
        createdAt: serverTimestamp(), // Videoları tarihe göre sıralamak için iyi olur
      });
      setTitle("");
      setVideoUrl("");
      alert("Video başarıyla eklendi!");
    } catch (error) {
      alert("Hata oluştu: " + error.message);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          onSubmit={handleLogin}
          className="p-8 bg-gray-100 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-xl font-bold">Admin Girişi</h2>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            className="p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-black text-white p-2 rounded">
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-20">
      <div className="w-full max-w-md p-8 bg-white border rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Video Ekle</h2>
          <button
            onClick={() => signOut(auth)}
            className="text-red-500 text-sm"
          >
            Çıkış Yap
          </button>
        </div>

        <form onSubmit={handleAddVideo} className="flex flex-col gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Video Başlığı"
            className="p-3 border rounded-lg"
            required
          />
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="YouTube Shorts Linki"
            className="p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg font-bold"
          >
            Sisteme Yükle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
