import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendContactEmail } from "./contact";

/**
 * contactInputSchema
 * Shared input schema for all 7 lead form variants.
 * Visible fields are variant-specific (controlled by the frontend LeadForm component).
 * Hidden attribution fields are always collected and included in the submission payload.
 */
const contactInputSchema = z.object({
  // Core visible fields
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),

  // Variant routing
  type: z.string().optional(),       // Human-readable form type label
  form_type: z.string().optional(),  // Explicit form type identifier

  // Variant-specific visible fields (packed into interests array by frontend)
  interests: z.array(z.string()).default([]),

  // Message
  message: z.string().optional(),

  // Attribution fields
  source: z.string().optional(),       // Page name / source label
  page_url: z.string().optional(),     // Full URL of the page where form was submitted
  page_title: z.string().optional(),   // Document title of the page
  utm_source: z.string().optional(),   // UTM source param
  utm_medium: z.string().optional(),   // UTM medium param
  utm_campaign: z.string().optional(), // UTM campaign param
  referrer: z.string().optional(),     // HTTP referrer
  timestamp: z.string().optional(),    // ISO 8601 submission timestamp

  // SMS consent fields — maps to GHL custom contact checkbox fields
  smsTransactionalConsent: z.boolean().optional(), // MRR Transactional SMS Consent
  smsMarketingConsent: z.boolean().optional(),     // MRR Marketing SMS Consent
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(contactInputSchema)
      .mutation(async ({ input }) => {
        const result = await sendContactEmail(input);
        return result;
      }),
  }),
});

export type AppRouter = typeof appRouter;
