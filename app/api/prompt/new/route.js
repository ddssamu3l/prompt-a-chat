import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

console.log('Prompt Schema:', Prompt.schema.obj);  // Add this line to log the schema definition

export const POST = async (req, res) => {
  try {
    const { userId, title, prompt, tag } = await req.json();
    
    // Log the parsed request body
    console.log('Parsed request body:', { userId, title, prompt, tag });

    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      title: title,
      prompt: prompt,
      tag: tag,
    });

    // Log the newPrompt object before saving
    console.log('New Prompt object before saving:', newPrompt);

    await newPrompt.save();

    // Log the title to confirm it matches the input title
    console.log('New prompt created with title:', newPrompt.title);

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error creating new post:', error);

    // status 500 means server error
    return new Response('Failed to create a new post', { status: 500 });
  }
};
