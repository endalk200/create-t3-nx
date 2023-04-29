import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';

import { type AppRouter } from './lib/root';

export { appRouter, type AppRouter } from './lib/root';
export { createTRPCContext } from './lib/trpc';

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
