import { SignedIn, SignedOut } from "@clerk/nextjs";
import { get } from "http";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";
import { getCurrentUserImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
 const images = await getCurrentUserImages();
 return (
  <div className="flex flex-wrap gap-4 p-4">
    {images.map((image) => (
      <div key={`${image.id}`} className="w-48 flex flex-col justify-center">
        <Link href={`/img/${image.id}`}>
          <Image src={image.url} alt={image.name} className="" width={600} height={400} style={{ objectFit: "fill" }} />
        </Link>
        {/* <p>{image.name}</p> */}
      </div>
    ))}
  </div>
 )
}

export default async function HomePage() {
  headers();
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
    <SignedIn>
      <Images />
    </SignedIn>
      
    </main>
  );
}
