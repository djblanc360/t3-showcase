import { clerkClient } from '@clerk/nextjs/server';
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props:{id: number}) {
    const image = await getImage(props.id);
    const client = await clerkClient();
    const uploaderInfo = await client.users.getUser(image.userId);

    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center w-2/3">
                <img src={image.url} alt={image.name} className="w-full object-contain" />
            </div>
            
            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <h1 className="text-lg border-b text-center p-2">Lorem ipsum dolor</h1>
                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className="flex flex-col p-2">
                    <span>Created on:</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, et quis, sequi laboriosam id sed tenetur modi, nihil error eius esse corporis atque assumenda porro. Eveniet asperiores ducimus tempora quia!
                </p>
            </div>
        </div>
        
    );
}