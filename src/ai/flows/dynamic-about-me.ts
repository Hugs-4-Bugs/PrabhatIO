'use server';

/**
 * @fileOverview AI flow for generating dynamic 'About Me' summaries for the portfolio.
 *
 * - generateAboutMe - Generates a tailored 'About Me' summary based on specified length and tone.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The return type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  length: z
    .enum(['short', 'long'])
    .describe('The desired length of the summary.'),
  tone: z
    .enum(['professional', 'casual'])
    .describe('The desired tone of the summary.'),
  userDetails: z.string().describe('Details about the user.'),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
  summary: z.string().describe('The generated About Me summary.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `You are an AI assistant specializing in creating About Me summaries.

  Based on the user details, length, and tone, generate an About Me summary.

  User Details: {{{userDetails}}}
  Length: {{{length}}}
  Tone: {{{tone}}}

  Summary:`, // Fixed typo here
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
