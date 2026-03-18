import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // firebase.js dosyanın yolundan emin ol
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const VIDEOS_PER_PAGE = 9;

const VideoPortfolyo = () => {
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState({});
  const [videos, setVideos] = useState([]); // Videolar artık buradan gelecek
  const [loading, setLoading] = useState(true); // Veri yükleniyor kontrolü

  // Firebase'den verileri çekme
  useEffect(() => {
    // "projects" koleksiyonuna bağlanıyoruz
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const videoData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const start = (page - 1) * VIDEOS_PER_PAGE;
  const currentVideos = videos.slice(start, start + VIDEOS_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const changePage = (newPage) => {
    setLoaded({});
    setPage(newPage);
  };

  if (loading) return <div className="text-center py-20">Yükleniyor...</div>;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[65%] lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {currentVideos.map((video) => {
          // Firebase'deki URL'den sadece ID'yi çekmek veya URL'i temizlemek için:
          const videoId = video.videoUrl.includes("shorts/")
            ? video.videoUrl.split("shorts/")[1]?.split("?")[0]
            : video.videoUrl;

          return (
            <div
              key={video.id}
              className="relative aspect-[9/16] rounded-4xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={video.title || "YouTube Shorts"}
                frameBorder="0"
                onLoad={() =>
                  setLoaded((prev) => ({ ...prev, [video.id]: true }))
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {!loaded[video.id] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12 mb-12">
          <button
            onClick={() => changePage(Math.max(page - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl bg-gray-200 disabled:opacity-40 cursor-pointer"
          >
            Önceki
          </button>

          <span className="text-sm opacity-70">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => changePage(Math.min(page + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl bg-gray-200 disabled:opacity-40 cursor-pointer"
          >
            Sonraki
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPortfolyo;
