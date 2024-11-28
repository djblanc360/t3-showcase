import 'server-only';
import { db } from '~/server/db';
import { auth } from '@clerk/nextjs/server';

export async function getCurrentUserImages() {

    const user = await auth();

    if (!user.userId) { throw new Error('Unauthorized'); }

    const images= await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => [desc(model.id)], // by latest id
    });
    return images;
}

export async function getImage(id: number) {
    // ensure user is allowed access to the image being requested
    const user = await auth();
    if (!user.userId) throw new Error('Unauthorized');

    const image = await db.query.images.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if (!image) throw new Error('Image not found');

    if (image.userId !== user.userId) throw new Error('Unauthorized');

    return image;
}