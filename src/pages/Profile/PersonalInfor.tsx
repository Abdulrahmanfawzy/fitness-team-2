import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPersonalInfor } from "@/lib/Api/Authentication/profile";

export default function PersonalInfor() {
  const [form, setForm] = useState<any>({});
  const [errors, setErrors] = useState<any>({}); 

  const inputs = [
    ["fullName", "Full Name"],
    ["email", "Email"],
    ["phone", "Phone"],
    ["dob", "Date of Birth"],
    ["gender", "Gender"],
    ["location", "Location"],
  ];

  const { data } = useQuery({
    queryKey: ["profile-personal-info"],
    queryFn: getPersonalInfor,
  });

  useEffect(() => {
    if (data) {
      setForm({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        dob: data.dob,
        gender: data.gender,
        location: data.location,
      });
    }
  }, [data]);

  useEffect(() => {
    const saved = localStorage.getItem("personalInfo");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const validateForm = () => {
    const newErrors: any = {};
    inputs.forEach(([name]) => {
      if (!form[name as keyof typeof form] || form[name as keyof typeof form] === "") {
        newErrors[name] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSaveFront = () => {
    if (!validateForm()) return; 

    localStorage.setItem("personalInfo", JSON.stringify(form));
    alert("Data saved locally ✅");
    setErrors({}); 
  };

  return (
    <>
      <div className="px-4 md:px-8 mt-10">
        <h1 className="text-3xl mb-10 font-semibold">Personal Information</h1>
        <div className="border border-[#A7A7A7] p-4 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inputs.map(([name, label]) => (
              <div key={name}>
                <label className="block text-sm font-semibold text-[#A7A7A7] mb-2">
                  {label}
                </label>
                <input
                  className="bg-[#2D2D2D] p-2 mb-1 rounded text-[#A7A7A7] w-full"
                  value={form[name as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [name]: e.target.value })
                  }
                />
                {errors[name] && (
                  <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={handleSaveFront}
            className="bg-[#FF4D4D] mt-4 w-full md:w-1/2 py-3 rounded block mx-auto text-[#FFFFFF] font-semibold text-sm hover:bg-black border border-[#FF4D4D] transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}