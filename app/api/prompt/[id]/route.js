// get (read)
import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request, {params}) => {
    try{
        // connect to database
        await connectToDB();
        // get a single data object in the database with the id of "params.id"
        const prompt = await Prompt.findById(params.id).populate('creator');
        // if the get is unsucessful (can't find such a prompt), show error 404.
        if(!prompt){
            return new Response("Error: Prompt not found", {status: 404});
        }

        return new Response(JSON.stringify(prompt), {status: 200})
    }catch (error){
        console.log(error);
        return new Response("Failed to fetch one prompt by id", {status: 500})
    }
};

// patch (update)
export const PATCH = async (request, {params}) => {
    // we are getting the post's prompt and tag property so that we can update them
    const {title, prompt, tag} = await request.json();
    try {
        // connect to database
        await connectToDB();
        // get the post with the matching id as the one the params is looking for
        const existingPrompt = await Prompt.findById(params.id);
        // if not found, return 404
        if(!prompt){
            return new Response(`Error: Prompt not found. id= ${params.id}`, {status: 404});
        }

        // set the existing post's (the one returned by mongoDB with the matching id)
        // prompt to the new prompt (new prompt is from request.json())
        existingPrompt.prompt = prompt;
        // do the same with updating the prompt
        existingPrompt.tag = tag;
        // and title
        existingPrompt.title = title;
        await existingPrompt.save();
        
        return new Response("successfully edited the prompt", {status: 200})
    } catch (error) {
         console.log(error);
        return new Response(`Failed to update the prompt. id= ${params.id}`, {status: 500})
    }
};

// delete (delete)
export const DELETE = async (request, {params}) => {
    try {
        // connect to database
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);

        return new Response(`Prompt deleted successfully! id= ${params.id}`, {status: 200})
    } catch (error) {
        return new Response(`Failed to delete the prompt. id= ${params.id}`, {status: 500})
    }
};