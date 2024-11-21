import axios from "axios";

interface ContactResponse {
  success: boolean;
  message?: string;
  isLoading?: boolean;
}
interface OrganizationalQuestion {
  label: string;
  value: string;
}

export interface PricingData {
  name: string;
  email: string;
  comments?: string;
  softwareDevelopment?: boolean;
  teamAugumentation?: boolean;
  experts?: string[];
  marketOthers?: string;
  technology?: string[];
  marketing?: string[];
  services?: string[];
  duration?: string;
  companyType?: string;
  softwareType?: string;
  stage?: string;
  organizationalQuestions?: OrganizationalQuestion[];
  platform?: string[];
  budget?: string;
  file?: File;
  quoteType: "software_development" | "team_augmentation";
  platforms?: string;
  serviceothers?: string;
}

const fileToBase64 = async (file?: File): Promise<string | undefined> => {
  // Update parameter type
  if (!file) return undefined;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Now file is correctly typed as a Blob/File

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};
export const PricingAPI = async (
  data: PricingData,
  setLoading?: (loading: boolean) => void
): Promise<ContactResponse> => {
  try {
    setLoading?.(true);

    const files = await fileToBase64(data.file);
    const newData = { ...data, file: files };

    const response = await axios.post<ContactResponse>(
      "http://localhost:3000/api/pricing",
      newData,
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
