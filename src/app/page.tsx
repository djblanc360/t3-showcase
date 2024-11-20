import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/1SnDblWgyrve71vEpp5BdhCZkyxJvsQIAorm5bOYR6tWHSng",
  "https://utfs.io/f/1SnDblWgyrveYlC2WpkZ8NahtuQHe1cwsBL7dF93xyfRWD0A"
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
