import { z } from "zod";

export const serviceOptions = [
  "Ménage à domicile",
  "Repassage",
  "Nettoyage de locaux / bureaux",
  "Remise en état (après travaux)",
  "Traitement des nuisibles",
  "Autre / je ne sais pas",
] as const;

export const leadSchema = z.object({
  type: z.enum(["devis", "contact"]),
  name: z.string().min(2, "Votre nom est requis"),
  phone: z
    .string()
    .min(8, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s().-]{8,20}$/, "Numéro de téléphone invalide"),
  email: z
    .string()
    .email("E-mail invalide")
    .optional()
    .or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
  // Sélection issue du configurateur de devis (page Tarifs)
  items: z
    .array(
      z.object({
        label: z.string(),
        qty: z.number().optional(),
        price: z.number().nullable().optional(),
      })
    )
    .optional(),
  estimateBilled: z.number().optional(),
  estimateNet: z.number().optional(),
  withCredit: z.boolean().optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Veuillez accepter pour continuer"),
  // Anti-spam (honeypot) : doit rester vide
  company: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
