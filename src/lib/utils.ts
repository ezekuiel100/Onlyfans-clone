import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Stripe from "stripe";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export { stripe };
