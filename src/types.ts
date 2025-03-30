import { z } from 'zod';

export const SlackChannelSchema = z.object({
  name: z.string(),
  purpose: z.string(),
});

export const RequestChannelSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const MentionSchema = z.object({
  type: z.enum(['user', 'group', 'role']),
  value: z.string(),
  description: z.string(),
});

export const ContactInfoSchema = z.object({
  slack_channels: z.array(SlackChannelSchema),
  request_channels: z.array(RequestChannelSchema),
  mentions: z.array(MentionSchema),
});

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['business_unit', 'department', 'team']),
  parent_id: z.string().optional(),
  description: z.string().optional(),
  contact_info: ContactInfoSchema,
});

export const OrganizationsSchema = z.object({
  organizations: z.array(OrganizationSchema),
});

export type SlackChannel = z.infer<typeof SlackChannelSchema>;
export type RequestChannel = z.infer<typeof RequestChannelSchema>;
export type Mention = z.infer<typeof MentionSchema>;
export type ContactInfo = z.infer<typeof ContactInfoSchema>;
export type Organization = z.infer<typeof OrganizationSchema>;
export type Organizations = z.infer<typeof OrganizationsSchema>; 