/**
 * Interface to represent a user address.
 * Contains geographic and location information.
 */
export interface Address {
  street: string;
  city: string;
  country: string;
}

/**
 * Interface to represent a user in the ecommerce system.
 * Includes personal data, contact information, and account metadata.
 */
export interface User {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: string;
  address: Address;
  createdAt: Date;

  tags?: string[];
  description?: string;
}