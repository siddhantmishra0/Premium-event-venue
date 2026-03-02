-- Create inquiries table to store contact form submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date TEXT,
  guest_count TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for contact form submissions)
CREATE POLICY "Anyone can submit an inquiry"
ON public.inquiries
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading inquiries (for admin - we'll add auth later if needed)
CREATE POLICY "Anyone can view inquiries"
ON public.inquiries
FOR SELECT
USING (true);

-- Add index for faster queries on status
CREATE INDEX idx_inquiries_status ON public.inquiries(status);
CREATE INDEX idx_inquiries_created_at ON public.inquiries(created_at DESC);