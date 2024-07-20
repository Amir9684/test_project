import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/constants";
import { api } from "@/core/interceptor";
import { useState } from "react";

export const Weather = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>({});

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
    <div className="space-y-5 text-center w-full max-w-[70%] mx-auto py-10">
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
            <h3 className="text-xl font-semibold">{data.description}</h3>
          </>
        )}
      </div>
    </div>
  );
};
