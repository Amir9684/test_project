import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/constants";
import { api } from "@/core/interceptor";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export const Weather = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>(null);
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("lng");

  const apiCall = async (city: string) => {
    const res = await api.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    setData(res);
  };

  const handleChange = (value: string) => {
    setValue(value);
    apiCall(value);
  };

  return (
    <div className="space-y-5 text-center w-full min-h-[280px] mx-auto py-10 px-10">
      {/* Select Option */}
      <div>
        <Select value={value} onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((province) => (
              <SelectItem key={province.id} value={province.value}>
                {province.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        {data && (
          <>
            <h2 className="text-xl font-semibold">{data.address}</h2>
            <h3 className="text-xl font-semibold">{data.days?.[0].temp}</h3>
            <h3 className="text-xl font-semibold">
              {params === "en" ? data.description : t("weatherDescription")}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};
