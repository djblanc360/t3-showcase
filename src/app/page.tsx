import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/1SnDblWgyrves331B56wXrVIoRkMLDeiubqvBc4ZsgGSOdWN",
  "https://utfs.io/f/1SnDblWgyrveHjSOH1KGarVDsgtbB7Eo4USAq3If8hiQ5ROH",
  "https://utfs.io/f/1SnDblWgyrveOnYsna7equAI7tNJMr8W2Ho5XbcDk0jyEifG",
  "https://utfs.io/f/1SnDblWgyrvezPlc6EfotXc0fDRupv847g6CPQMewJHk2ydi",
  "https://utfs.io/f/1SnDblWgyrve0wj0d9Bo2Hzy8RIjCVln1reAmkhf3JX4YPWS",
  "https://utfs.io/f/1SnDblWgyrvePlOftYvT04GRAQpinuj2wlvbk5aMgOXBhItq",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}  className="" />
          </div>
        ))}
      </div>
      
    </main>
  );
}
