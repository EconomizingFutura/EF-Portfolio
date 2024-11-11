import axios from "axios";

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
}

interface ContactResponse {
  success: boolean;
  message?: string;
  isLoading?: boolean;
}

export const contactAPI = async (
  data: ContactData,
  setLoading?: (loading: boolean) => void
): Promise<ContactResponse> => {
  try {
    setLoading?.(true);

    const response = await axios.post<ContactResponse>(
      `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_CONTACT_ENDPOINT}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
    // eslint-disable-next-line no-useless-catch
  } catch (error) {
    throw error;
  } finally {
    setLoading?.(false);
  }
};
