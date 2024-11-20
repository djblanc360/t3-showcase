import { headers } from "next/headers";
import { mock } from "node:test";
import { db } from "~/server/db";

export const runtime = "force-dynamic";

/*
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
*/

export default async function HomePage() {
  headers();
  const images= await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)], // by latest id
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={`${image.id}-${index}`} className="w-48 flex flex-col">
            <img src={image.url}  className="" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      
    </main>
  );
}
