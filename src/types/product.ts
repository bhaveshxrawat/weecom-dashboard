import z from "zod";

export const OGProductSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	category: z.string(),
	stock: z.number(),
});

export const NewProductSchema = OGProductSchema.omit({ id: true });

export type OGProductType = z.infer<typeof OGProductSchema>;
export type NewProductType = z.infer<typeof NewProductSchema>;
