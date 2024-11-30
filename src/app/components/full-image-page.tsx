import { getImage } from "~/server/queries";

export default async function FullPageImageViewl(props:{id: number}) {
    const image = await getImage(props.id);
    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink felx justify-center items-center">
                <img src={image.url} alt={image.name} className="w-96 object-contain" />
            </div>
            

            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <h1 className="text-xl font-bold">Lorem ipsum dolor</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, et quis, sequi laboriosam id sed tenetur modi, nihil error eius esse corporis atque assumenda porro. Eveniet asperiores ducimus tempora quia!
                </p>
            </div>
        </div>
        
    );
}