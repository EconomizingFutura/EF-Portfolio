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
  file?: string;
  quoteType: "software_development" | "team_augmentation";
  platforms?: string;
  serviceothers?: string;
}

export const PricingAPI = async (
  data: PricingData,
  setLoading?: (loading: boolean) => void
): Promise<ContactResponse> => {
  try {
    setLoading?.(true);

    const response = await axios.post<ContactResponse>(
      "http://localhost:3000/api/pricing",
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
